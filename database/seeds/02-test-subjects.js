
exports.seed = function (knex) {
  const users = [
    {
      username: "tracker"
    }
  ];

  return knex('tracker').insert(users);
};
