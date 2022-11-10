'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('animals', [
      {
        name: 'Owl',
        species: 'Tyto Alba',
        information:
          'The barn owl is the most widely distributed species of owl in the world and one of the most widespread of all species of birds, being found almost everywhere except for the polar and desert regions, Asia north of the Himalayas, most of Indonesia, and some Pacific Islands.',
        image: './owl.jpg',
        exhibit_Id: 2
      },
      {
        name: 'Toucan',
        species: 'Ramphastidae',
        information:
          'Toucans are members of the Neotropical near passerine bird family Ramphastidae. The Ramphastidae are most closely related to the American barbets. They are brightly marked and have large, often colorful bills. The family includes five genera and over forty different species. ',
        image: './toucan.jpg',
        exhibit_Id: 2
      },
      {
        name: 'Flamingo',
        species: 'Phoenicopterus',
        information:
          'Phoenicopterus is a genus of birds in the flamingo family Phoenicopteridae.',
        image: './flamingo.jpg',
        exhibit_Id: 2
      },
      {
        name: 'Swan',
        species: 'Cygnus',
        information:
          "Swans are birds of the family Anatidae within the genus Cygnus. The swans' closest relatives include the geese and ducks. Swans are grouped with the closely related geese in the subfamily Anserinae where they form the tribe Cygnini. Sometimes, they are considered a distinct subfamily, Cygninae.",
        image: './swan.jpg',
        exhibit_Id: 2
      },
      {
        name: 'Crane',
        species: 'Gruidae',
        information:
          'Cranes are a family, the Gruidae, of large, long-legged, and long-necked birds in the group Gruiformes. The 15 species of cranes are placed in three genera, Antigone, Balearica, and Grus. Unlike the similar-looking but unrelated herons, cranes fly with necks outstretched, not pulled back.',
        image: './crane.jpg',
        exhibit_Id: 2
      },
      {
        name: 'Eagle',
        species: 'Aquila',
        information:
          'Aquila is the genus of true eagles. The genus name is Latin for "eagle", possibly derived from aquilus, "dark in colour".',
        image: './eagle.jpg',
        exhibit_Id: 2
      },
      {
        name: 'Hawk',
        species: 'Buteo',
        information:
          'Buteo is a genus of medium to fairly large, wide-ranging raptors with a robust body and broad wings. In the Old World, members of this genus are called "buzzards", but "hawk" is used in the New World. As both terms are ambiguous, buteo is sometimes used instead, for example, by the Peregrine Fund.',
        image: './hawk.jpg',
        exhibit_Id: 2
      },
      {
        name: 'Pelican',
        species: 'Pelicanus',
        information:
          'Pelicans are a genus of large water birds that make up the family Pelecanidae. They are characterized by a long beak and a large throat pouch used for catching prey and draining water from the scooped-up contents before swallowing. They have predominantly pale plumage, except for the brown and Peruvian pelicans.',
        image: './pelican.jpg',
        exhibit_Id: 2
      },
      {
        name: 'Peacock',
        species: 'Pavo Cristatus',
        information:
          'The Indian peafowl, also known as the common peafowl, and blue peafowl, is a peafowl species native to the Indian subcontinent. It has been introduced to many other countries.',
        image: './peacock.jpg',
        exhibit_Id: 2
      },
      {
        name: 'Duck',
        species: 'Anatidae',
        information:
          "The Anatidae are the biological family of water birds that includes ducks, geese, and swans. The family has a cosmopolitan distribution, occurring on all the world's continents except Antarctica. These birds are adapted for swimming, floating on the water surface, and in some cases diving in at least shallow water.",
        image: './ducks.jpg',
        exhibit_Id: 2
      },
      {
        name: 'Chicken',
        species: 'Gallus Gallus Domesticus',
        information:
          'The chicken is a domesticated junglefowl species, with attributes of wild species such as the grey and the Ceylon junglefowl that are originally from Southeastern Asia. Rooster or cock is a term for an adult male bird, and a younger male may be called a cockerel. A male that has been castrated is a capon.',
        image: './chickens.jpg',
        exhibit_Id: 2
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
