'use strict'

const { query } = require('express')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('exhibits', [
      {
        name: 'Aquarium',
        image: 'images/aquarium.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aviary',
        image: 'images/aviary.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Forest',
        image: 'images/rainforest.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Desert',
        image: 'images/desert.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Reptiles',
        image: 'images/reptiles.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Frozen Tundra',
        image: 'images/frozen-tundra.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('exhibits', null, {})
  }
}
