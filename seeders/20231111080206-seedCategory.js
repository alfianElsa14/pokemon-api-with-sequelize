'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const dataCategory = [
      {
        name: 'omnivora',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'karnivora',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'herbivora',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    await queryInterface.bulkInsert('Categories', dataCategory, null)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, null)
  }
};
