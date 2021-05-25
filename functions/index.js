const functions = require("firebase-functions");

const authTriggers = require("./triggers/auth");
const storiesTriggers = require("./triggers/stories");
const charactersTriggers = require("./triggers/characters");
const interactionsTriggers = require("./triggers/interactions");

// USER
exports.onUserCreated = functions
  .region("europe-west1")
  .auth.user()
  .onCreate(authTriggers.onCreateUser);
exports.onUserDeleted = functions
  .region("europe-west1")
  .firestore.document("users/{id}")
  .onDelete(authTriggers.onDeleteUser);
exports.onUserEdited = functions
  .region("europe-west1")
  .firestore.document("users/{id}")
  .onUpdate(authTriggers.userUpdated);

// STORIES
exports.onStoryCreated = functions
  .region("europe-west1")
  .firestore.document("stories/{id}")
  .onCreate(storiesTriggers.storyCreated);
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

// INTERACTIONS
exports.onStoryLiked = functions
  .region("europe-west1")
  .firestore.document("storiesLikes/{id}")
  .onCreate(interactionsTriggers.storyLiked);
exports.onStoryUnliked = functions
  .region("europe-west1")
  .firestore.document("storiesLikes/{id}")
  .onDelete(interactionsTriggers.storyUnliked);
exports.onCharacterLiked = functions
  .region("europe-west1")
  .firestore.document("charactersLikes/{id}")
  .onCreate(interactionsTriggers.characterLiked);
exports.onCharactersUnliked = functions
  .region("europe-west1")
  .firestore.document("charactersLikes/{id}")
  .onDelete(interactionsTriggers.characterUnliked);
exports.onUserFollowed = functions
  .region("europe-west1")
  .firestore.document("usersLikes/{id}")
  .onCreate(interactionsTriggers.userFollowed);
exports.onUserUnfollowed = functions
  .region("europe-west1")
  .firestore.document("usersLikes/{id}")
  .onDelete(interactionsTriggers.userUnfollowed);
exports.onCommentPosted = functions
  .region("europe-west1")
  .firestore.document("comments/{id}")
  .onCreate(interactionsTriggers.commentPosted);
exports.onCommentDeleted = functions
  .region("europe-west1")
  .firestore.document("comments/{id}")
  .onDelete(interactionsTriggers.commentDeleted);
exports.onStoryRated = functions
  .region("europe-west1")
  .firestore.document("stars/{id}")
  .onCreate(interactionsTriggers.storyRated);
exports.onStoryRateUpdated = functions
  .region("europe-west1")
  .firestore.document("stars/{id}")
  .onUpdate(interactionsTriggers.rateUpdate);
