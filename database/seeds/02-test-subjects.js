
exports.seed = function (knex) {
  const users = [
    {
      username: "Trapper"
    }
  ];

  return knex('tracker').insert(users);
};
