exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const users = [
    {
      username: "admin", 
      password: "admin", 
      department: "admin", 
    },
    {
      username: "royer", 
      password: "two", 
      department: "student", 
    },
    {
      username: "Austin", 
      password: "three", 
      department: "TL", 
    },
    
  ];

  return knex("users")
    .insert(users)
    .then(() => console.log("\n== Seed data for users table added. ==\n"));
};
