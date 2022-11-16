'use strict'

const { query } = require('express')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('exhibits', [
      {
        name: 'Aquarium',
        image:
          'https://images.pexels.com/photos/3699434/pexels-photo-3699434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aviary',
        image:
          'https://images.pexels.com/photos/1595732/pexels-photo-1595732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Forest',
        image:
          'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=1600',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Desert',
        image:
          'https://images.pexels.com/photos/998653/pexels-photo-998653.jpeg?auto=compress&cs=tinysrgb&w=1600',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Reptiles',
        image:
          'https://images.pexels.com/photos/927497/pexels-photo-927497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Frozen Tundra',
        image:
          'https://images.pexels.com/photos/10661519/pexels-photo-10661519.jpeg?auto=compress&cs=tinysrgb&w=1600',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('exhibits', null, {})
  }
}
