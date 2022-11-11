'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('animals', [
      {
        name: 'Antelope',
        species: 'Bovidae',
        information:
          'The term antelope is used to refer to many species of even-toed ruminant that are indigenous to various regions in Africa and Eurasia. Antelope comprise a wastebasket taxon defined as any of numerous Old World grazing and browsing hoofed mammals belonging to the family Bovidae of the order Artiodactyla.',
        image: 'images/antelope.jpg',
        exhibit_Id: 4
      },
      {
        name: 'Hyena',
        species: 'Hyaenidae',
        information:
          'Hyenas, or hyaenas, are feliform carnivoran mammals of the family Hyaenidae. With only four extant species, it is the fifth-smallest family in the Carnivora and one of the smallest in the class Mammalia. Despite their low diversity, hyenas are unique and vital components of most African ecosystems.',
        image: 'images/hyena.jpg',
        exhibit_Id: 4
      },
      {
        name: 'Meerkat',
        species: 'Suricata suricatta',
        information:
          'The meerkat or suricate is a small mongoose found in southern Africa. It is characterised by a broad head, large eyes, a pointed snout, long legs, a thin tapering tail, and a brindled coat pattern. The head-and-body length is around 35 cm, and the weight is typically between 0.62 and 0.97 kg',
        image: 'images/meerkat.jpg',
        exhibit_Id: 4
      },
      {
        name: 'Camel',
        species: 'Camelini',
        information:
          'A camel is an even-toed ungulate in the genus Camelus that bears distinctive fatty deposits known as "humps" on its back. Camels have long been domesticated and, as livestock, they provide food and textiles',
        image: 'images/camel.jpg',
        exhibit_Id: 4
      },
      {
        name: 'Giraffe',
        species: 'Giraffa',
        information:
          'The giraffe is a large African hoofed mammal belonging to the genus Giraffa. It is the tallest living terrestrial animal and the largest ruminant on Earth. Traditionally, giraffes were thought to be one species, Giraffa camelopardalis, with nine subspecies.',
        image: 'images/giraffe.jpg',
        exhibit_Id: 4
      },
      {
        name: 'Polar Bear',
        species: 'Ursus maritimus',
        information:
          'The polar bear is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. It is the largest extant bear species, as well as the largest extant land carnivore.',
        image: 'images/polar-bears.jpg',
        exhibit_Id: 6
      },
      {
        name: 'Artic Fox',
        species: 'Vulpes lagopus',
        information:
          'The Arctic fox, also known as the white fox, polar fox, or snow fox, is a small fox native to the Arctic regions of the Northern Hemisphere and common throughout the Arctic tundra biome. It is well adapted to living in cold environments, and is best known for its thick, warm fur that is also used as camouflage.',
        image: 'images/arctic-fox.jpg',
        exhibit_Id: 6
      },
      {
        name: 'Penguin',
        species: 'Spheniscidae',
        information:
          'Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.',
        image: 'images/penguins.jpg',
        exhibit_Id: 6
      },
      {
        name: 'Puffin',
        species: 'Fratercula',
        information:
          'Puffins are any of three species of small alcids in the bird genus Fratercula. These are pelagic seabirds that feed primarily by diving in the water. They breed in large colonies on coastal cliffs or offshore islands, nesting in crevices among rocks or in burrows in the soil.',
        image: 'images/puffin.jpg',
        exhibit_Id: 6
      },
      {
        name: 'Buffalo',
        species: 'Bison bison',
        information:
          'The buffalo is a species of bison native to North America. Sometimes colloquially referred to as American buffalo or simply buffalo, it is one of two extant species of bison, alongside the European bison.',
        image: 'images/buffalo.jpg',
        exhibit_Id: 6
      },
      {
        name: 'Lynx',
        species: ' Lynx',
        information:
          'A lynx is any of the four species within the medium-sized wild cat genus Lynx. The name lynx originated in Middle English via Latin from the Greek word λύγξ, derived from the Indo-European root leuk- in reference to the luminescence of its reflective eyes.',
        image: 'images/lynx.jpg',
        exhibit_Id: 6
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
