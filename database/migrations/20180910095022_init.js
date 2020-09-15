exports.up = function (knex) {
  return knex.schema
    .createTable("roles", tbl => {
      tbl.increments()

      tbl.string("name", 128).notNullable().unique()
    })
    .createTable("users", tbl => {
      tbl.increments()

      tbl.string("username", 128).notNullable().unique().index()
      tbl.string("password", 256).notNullable()

      tbl
        .string("role").index()
    })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("roles")
}
