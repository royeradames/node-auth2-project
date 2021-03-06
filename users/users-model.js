const db = require("../database/connection.js")

module.exports = {
  add,
  find,
  findBy,
  findById,
}

function find() {
  return db("users").select("id", "username").orderBy("id")
}

function findBy(filter) {
  console.log(`user model`)
  console.log(`inside findBy`)
  console.log(filter)
  return db("users")
  .where(filter)
  .orderBy("id")
  .select('id','username', 'password','department')
}
// function findBy(filter) {
//   return db("users as u")
//   .where(filter)
//   .orderBy("u.id")
//   .join('roles as r', 'r.id', 'u.role')
//   .select('u.id', 'u.username', 'u.password', 'r.name as role')
// }

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id")

    return findById(id)
  } catch (error) {
    throw error
  }
}

function findById(id) {
  return db("users").where({ id }).first()
}
