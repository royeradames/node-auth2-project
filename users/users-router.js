const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, checkRole(1), (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

function checkRole(role) {
  // if the role of the logged in user matches the
  // "role" argument, let the request continue
  // otherwise return code 403

  return function (req, res, next) {
    if (req.jwt.role === role) {
      next()
    } else {
      res.status(403).json({ error: 'invalid request' })
    }
  }
}

module.exports = router;
