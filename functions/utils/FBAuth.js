const { admin, db } = require('./admin')

module.exports = (req, res, next) => {
  let idToken

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    idToken = req.headers.authorization.split('Bearer ')[1]
  } else {
    console.error('No token found')
    return res.status(403).json({ error: 'Unauthorized' })
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then(decodedToken => {
      req.user = decodedToken
      return db
          .collection('users')
          .where('id', '==', req.user.user_id)
          .limit(1)
          .get()
    })
    .then(data => {
      req.user.username = data.docs[0].data().username
      req.user.image = data.docs[0].data().image
      return next()
    })
    .catch(err => {
      console.error('Error with token', err)
      return res.status(403).json(err)
    })
}