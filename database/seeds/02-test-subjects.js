
exports.seed = function (knex) {
  const users = [
    {
      username: "Trapper",
      total_hours: 15.5,
      acct_created: '2015-12-25',
      total_bloodpoints: 3654180,
      ult_rare_offerings: 4,
      mystery_boxes_opened: 89,
      survivor_rank: 4,
      survivor_perfect_games: 14,
      ult_rare_addons_surv: 0,
      survivor_full_loadout: 29,
      generators_repaired: 554,
      escaped_alive: 0,
      killer_rank: 1,
      killer_full_loadout: 0,
      survivors_sacrificed: 80,
      hatches_closed: 30
    }
  ];

  return knex('tracker').insert(users);
};
