import React, { useState, useEffect, useContext, createContext } from "react";
import { auth, db } from "../redux/fbConfig";

const notificationContext = createContext();

export function ProvideNotification({ children }) {
  const notifications = useProvideNotification();
  return (
    <notificationContext.Provider value={notifications}>
      {children}
    </notificationContext.Provider>
  );
}

export const useNotifcations = () => {
  return useContext(notificationContext);
};

function useProvideNotification() {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  const markAsRead = (id) =>
    db.collection("notifications").doc(id).update({ read: true });

  const deleteOne = (id) => db.collection("notifications").doc(id).delete();

  const markAllAsRead = () => {
    const batch = db.batch();
    const userId = auth.currentUser.uid;

    db.collection("notifications")
      .where("recipient", "==", userId)
      .where("read", "==", false)
      .get()
      .then((data) => {
        data.forEach((doc) => {
          batch.update(db.collection("notifications").doc(doc.id), {
            read: true,
          });
        });
        return batch.commit();
      });
  };

  const deleteAll = () => {
    const batch = db.batch();
    const userId = auth.currentUser.uid;

    db.collection("notifications")
      .where("recipient", "==", userId)
      .get()
      .then((data) => {
        data.forEach((doc) => {
          batch.delete(db.collection("notifications").doc(doc.id));
        });
        return batch.commit();
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.uid) {
        db.collection("notifications")
          .where("recipient", "==", user.uid)
          .onSnapshot(async (docs) => {
            let items = [];
            items = docs.docs
              .map((doc) => ({ ...doc.data(), id: doc.id }))
              .sort((a, b) => {
                a =
                  typeof a.createdAt !== "object"
                    ? new Date(a.createdAt)
                    : new Date(a.createdAt.seconds);
                b =
                  typeof b.createdAt !== "object"
                    ? new Date(b.createdAt)
                    : new Date(b.createdAt.seconds);

                return b > a ? -1 : b < a ? 1 : 0;
              });
            const getUsers = await db.collection("users").get();
            const users = await getUsers.docs.map((u) => ({
              ...u.data(),
              id: u.id,
            }));

            items = items.map((notif) => {
              const user = users.find((u) => u.id === notif.sender);
              return {
                ...notif,
                user: user ? user : {},
              };
            });
            setNotifications(items);
          });
        setIsLoading(false);
      } else return;
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    setCount(notifications.filter((n) => !n.read).length);
  }, [notifications]);

  return {
    isLoading,
    items: notifications,
    markAsRead,
    count,
    deleteOne,
    markAllAsRead,
    deleteAll,
  };
}
