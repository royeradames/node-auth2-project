const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
  console.log('users get /')
  console.log(req.jwt)
  console.log(req.jwt.department)
  const department = {department : req.jwt.department}
  Users.findBy(department)
    .then(users => {
      console.log(`inside findBy`)
      console.log(users)
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

function checkDepartment() {
  // if the role of the logged in user matches the
  // "role" argument, let the request continue
  // otherwise return code 403

  return function (req, res, next) {
    console.log(`inside checkRole`)
    if (req.jwt.role === role) {
      console.log(`inside if`)

      next()
    } else {
      console.log(`inside else`)

      res.status(403).json({ error: 'invalid request' })
    }
  }
}

module.exports = router;
