const functions = require("firebase-functions");

const authTriggers = require("./triggers/auth");
const storiesTriggers = require("./triggers/stories");
const charactersTriggers = require("./triggers/characters");

// USER
exports.onUserDeleted = functions
  .region("europe-west1")
  .firestore.document("users/{id}")
  .onDelete(authTriggers.onDeleteUser);
exports.onUserEdited = functions
  .region("europe-west1")
  .firestore.document("users/{id}")
  .onUpdate(authTriggers.userUpdated);

// STORIES
exports.onStoryDeleted = functions
  .region("europe-west1")
  .firestore.document("stories/{id}")
  .onDelete(storiesTriggers.storyDeleted);
exports.onStoryUpdated = functions
  .region("europe-west1")
  .firestore.document("stories/{id}")
  .onUpdate(storiesTriggers.storyUpdated);

// CHAPTERS
exports.onChapterCreated = functions
  .region("europe-west1")
  .firestore.document("chapters/{id}")
  .onCreate(storiesTriggers.chapterCreated);
exports.onChapterEdited = functions
  .region("europe-west1")
  .firestore.document("chapters/{id}")
  .onUpdate(storiesTriggers.chapterUpdated);
exports.onChapterDeleted = functions
  .region("europe-west1")
  .firestore.document("chapters/{id}")
  .onDelete(storiesTriggers.chapterDeleted);

// CHARACTERS
exports.onDeleteCharacter = functions
  .region("europe-west1")
  .firestore.document("characters/{id}")
  .onDelete(charactersTriggers.deleteCharacter);
