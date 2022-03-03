const faker = require('faker')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cohorts').del()
  const cohorts = Array.from({length:10}).map(() => {
    return {
      'name': faker.name.jobTitle(),
      'members': faker.lorem.words(faker.datatype.number({ min: 15, max: 25 })).split(" ").join(", "),
      'logoUrl': faker.image.abstract(50, 50, true)
    }

  })
  await knex('cohorts').insert(cohorts);
};
