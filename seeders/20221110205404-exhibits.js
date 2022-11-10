'use strict'

const { query } = require('express')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('exhibits', [
      {
        name: 'Aquarium',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aviary',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Forest',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Desert',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Reptiles',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Frozen Tundra',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('exhibits', null, {})
  }
}
