const { db } = require('./admin')

exports.addItem = (collection, item, itemName, res) => {
  db
    .collection(collection)
    .add(item)
    .then(doc => {
      res.json({ message: `${itemName} ${doc.id} successfully created` })
    })
    .catch(err => {
      res.status(500).json({ error: 'something went wrong' })
      console.error(err)
    })
}

exports.like = (collection, sender, recipient, item, newItem, message, res) => {
  const likeDocument = db.collection(collection).where('sender', '==', sender).where('recipient', '==', recipient).limit(1)

  const itemDoc = db.doc(`/users/${recipient}`)

  let itemData = {}

  itemDoc
    .get()
    .then(doc => {
      if (doc.exists) {
        itemData = doc.data()
        itemData.id = doc.ic
        return likeDocument.get()
      } else {
        return res.status(404).json({ error: `${item} not found` })
      }
    })
    .then(data => {
      if (data.empty) {
        return db.collection(collection).add(newItem)
      } else {
        return res.status(400).json({ error: message })
      }
    })
    .then(() => res.json(itemData))
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: err.code })
    })
}

exports.mergeEquallyLabeledTypes = (collector, type) => {
  var key = type.id
  var story = collector.story;
  var storedType = story[key];
  if (storedType) { // merge `children` of identically named types.
    storedType.children = storedType.children.concat(type.children);
  } else {
    store[key] = type;
    collector.list.push(type);
  }
  return collector;
}

exports.reduceChapters = data => {
  const result = data.reduce((acc, d) => {
    const found = acc.find(a => a.storyId === d.storyId);

    const value = { id: d.id, title: d.title };
    if (!found) {
      acc.push({storyId:d.storyId, chapters: [value]})
    }
    else {
      found.chapters.push(value)
    }
    return acc;
  }, []);

  return result
}