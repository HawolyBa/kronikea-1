import React from "react";
import Link from "next/link";
import { Form, Select, PageHeader } from "antd";

const SortInput = ({ title, itemData, setData, type, options, context }) => {
  const sortArray = (value) => {
    let newArr = [];

    if (value === "date-asc") {
      newArr = [...itemData].sort((a, b) => {
        return typeof a.createdAt === "object"
          ? new Date(a.createdAt.seconds * 1000) -
              new Date(b.createdAt.seconds * 1000)
          : new Date(a.createdAt) - new Date(b.createdAt);
      });
    } else if (value === "date-desc") {
      newArr = [...itemData].sort((a, b) => {
        return typeof a.createdAt === "object"
          ? new Date(b.createdAt.seconds * 1000) -
              new Date(a.createdAt.seconds * 1000)
          : new Date(b.createdAt) - new Date(a.createdAt);
      });
    } else if (value === "name-desc") {
      if (type === "locations") {
        newArr = [...itemData].sort((a, b) => {
          const keyA = a.name.toLowerCase(),
            keyB = b.name.toLowerCase();

          if (keyA > keyB) return -1;
          if (keyA < keyB) return 1;
          return 0;
        });
      } else if (type === "stories") {
        newArr = [...itemData].sort((a, b) => {
          const keyA = a.title.toLowerCase(),
            keyB = b.title.toLowerCase();

          if (keyA > keyB) return -1;
          if (keyA < keyB) return 1;
          return 0;
        });
      }
    } else if (value === "name-asc") {
      if (type === "locations") {
        newArr = [...itemData].sort((a, b) => {
          const keyA = a.name.toLowerCase(),
            keyB = b.name.toLowerCase();
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
      } else if (type === "stories") {
        newArr = [...itemData].sort((a, b) => {
          const keyA = a.title.toLowerCase(),
            keyB = b.title.toLowerCase();
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
      }
    } else if (value === "firstname-asc") {
      newArr = [...itemData].sort((a, b) => {
        const keyA = a.firstname.toLowerCase(),
          keyB = b.firstname.toLowerCase();
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    } else if (value === "firstname-desc") {
      newArr = [...itemData].sort((a, b) => {
        const keyA = a.firstname.toLowerCase(),
          keyB = b.firstname.toLowerCase();
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      });
    } else if (value === "lastname-asc") {
      newArr = [...itemData].sort((a, b) => {
        const keyA = a.lastname.toLowerCase(),
          keyB = b.lastname.toLowerCase();
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    } else if (value === "lastname-desc") {
      newArr = [...itemData].sort((a, b) => {
        const keyA = a.lastname.toLowerCase(),
          keyB = b.lastname.toLowerCase();
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      });
    } else if (value === "username-asc") {
      newArr = [...itemData].sort((a, b) => {
        const keyA = a.username.toLowerCase(),
          keyB = b.username.toLowerCase();
        console.log(keyA);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    } else if (value === "username-desc") {
      newArr = [...itemData].sort((a, b) => {
        const keyA = a.username.toLowerCase(),
          keyB = b.username.toLowerCase();
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      });
    } else {
      newArr = itemData;
    }
    setData(newArr);
  };

  return (
    <>
      <PageHeader
        title={`${itemData.length} ${title}`}
        extra={
          <Form initialValues={{ sort: "date-desc" }}>
            <Form.Item label="Sort by" name="sort">
              <Select onChange={(val) => sortArray(val)}>
                {options.map((option, i) => (
                  <Select.Option key={i} value={option.value}>
                    {option.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        }
      >
        {context === "private" && type === "stories" ? (
          <Link href="/story/new">
            <a className="add-btn-circle">
              <ion-icon name="add-circle"></ion-icon>
              <span>Add a new story</span>
            </a>
          </Link>
        ) : context === "private" && type === "locations" ? (
          <Link href="/location/new">
            <a className="add-btn-circle">
              <ion-icon name="add-circle"></ion-icon>
              <span>Add a new location</span>
            </a>
          </Link>
        ) : context === "private" && type === "characters" ? (
          <Link href="/character/new">
            <a className="add-btn-circle">
              <ion-icon name="add-circle"></ion-icon>
              <span>Add a new character</span>
            </a>
          </Link>
        ) : null}
      </PageHeader>
    </>
  );
};

export default SortInput;
