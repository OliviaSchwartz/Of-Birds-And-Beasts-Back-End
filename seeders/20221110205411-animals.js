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
      },
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
      },

      {
        name: 'Whale Shark',
        species: 'Rhincodon typus',
        information:
          'The whale shark (Rhincodon typus) is a slow-moving, filter-feeding carpet shark and the largest known extant fish species. The largest confirmed individual had a length of 18.8 m (61.7 ft).',
        image: './whale-shark.jpg',
        exhibit_Id: 1
      },
      {
        name: 'Jellyfish',
        species: 'Chironex fleckeri',
        information:
          'Jellyfish are found all over the world, from surface waters to the deep sea. Scyphozoans (the "true jellyfish") are exclusively marine, but some hydrozoans with a similar appearance live in freshwater. Large, often colorful, jellyfish are common in coastal zones worldwide. ',
        image: './jellyfish.jpg',
        exhibit_Id: 1
      },
      {
        name: 'Sea Turtle',
        species: 'Chelonioidea',
        information:
          'The seven existing species of sea turtles are the flatback, green, hawksbill, leatherback, loggerhead, Kemps ridley, and olive ridley sea turtles.',
        image: './sea-turtle.jpg',
        exhibit_Id: 1
      },
      {
        name: 'Otter',
        species: 'Mustelidae',
        information:
          'Otters are carnivorous mammals in the subfamily Lutrinae. The 13 extant otter species are all semiaquatic, aquatic, or marine, with diets based on fish and invertebrates. Lutrinae is a branch of the Mustelidae family, which also includes weasels, badgers, mink, and wolverines, among other animals.',
        image: './otters.jpg',
        exhibit_Id: 1
      },
      {
        name: 'Manatee',
        species: 'Trichechus',
        information:
          'Manatees are herbivores and eat over 60 different freshwater and saltwater plants. Manatees inhabit the shallow, marshy coastal areas and rivers of the Caribbean Sea, the Gulf of Mexico, the Amazon basin, and West Africa.',
        image: './manatee.jpg',
        exhibit_Id: 1
      },
      {
        name: 'Gorilla',
        species: 'Troglodytes',
        information:
          'Gorillas are herbivorous, predominantly ground-dwelling great apes that inhabit the tropical forests of equatorial Africa. The genus Gorilla is divided into two species: the eastern gorilla and the western gorilla, and either four or five subspecies. The DNA of gorillas is highly similar to that of humans, from 95 to 99% depending on what is included, and they are the next closest living relatives to humans after chimpanzees and bonobos.',
        image: './gorilla.jpg',
        exhibit_Id: 3
      },
      {
        name: 'Okapi',
        species: 'Okapia johnstoni',
        information:
          'The okapi stands about 1.5 m (4 ft 11 in) tall at the shoulder and has a typical body length around 2.5 m (8 ft 2 in). Its weight ranges from 200 to 350 kg (440 to 770 lb). It has a long neck, and large, flexible ears. Its coat is a chocolate to reddish brown, much in contrast with the white horizontal stripes and rings on the legs, and white ankles. Male okapis have short, distinct horn-like protuberances on their heads called ossicones, less than 15 cm (5.9 in) in length. Females possess hair whorls, and ossicones are absent.',
        image: './okapi.jpg',
        exhibit_Id: 3
      },
      {
        name: 'Sloth',
        species: 'Megatherioidea',
        information:
          'Sloths are a group of arboreal Neotropical xenarthran mammals constituting the suborder Folivora. Noted for their slowness of movement, they spend most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America. They are considered to be most closely related to anteaters, together making up the xenarthran order Pilosa.',
        image: './sloth.jpg',
        exhibit_Id: 3
      },
      {
        name: 'Jaguar',
        species: 'Panthera onca',
        information:
          'The jaguar (Panthera onca) is a large cat species and the only living member of the genus Panthera native to the Americas. With a body length of up to 1.85 m (6 ft 1 in) and a weight of up to 158 kg (348 lb), it is the largest cat species in the Americas and the third largest in the world. Its distinctively marked coat features pale yellow to tan colored fur covered by spots that transition to rosettes on the sides, although a melanistic black coat appears in some individuals. The jaguars powerful bite allows it to pierce the carapaces of turtles and tortoises, and to employ an unusual killing method: it bites directly through the skull of mammalian prey between the ears to deliver a fatal blow to the brain.',
        image: './jaguar.jpg',
        exhibit_Id: 3
      },
      {
        name: 'Capybara',
        species: 'Hydrochoerus hydrochaeris',
        information:
          'The capybara is a giant cavy rodent native to South America. It is the largest living rodent and a member of the genus Hydrochoerus. The only other extant member is the lesser capybara (Hydrochoerus isthmius). Its close relatives include guinea pigs and rock cavies, and it is more distantly related to the agouti, the chinchilla, and the nutria. The capybara inhabits savannas and dense forests and lives near bodies of water. It is a highly social species and can be found in groups as large as 100 individuals, but usually lives in groups of 10–20 individuals. The capybara is hunted for its meat and hide and also for grease from its thick fatty skin. It is not considered a threatened species.',
        image: './capybara.jpg',
        exhibit_Id: 3
      },
      {
        name: 'Howler Monkey',
        species: 'Simia belzebul',
        information:
          'Howler monkeys (genus Alouatta, monotypic in subfamily Alouattinae) are among the largest of the New World monkeys. They are famous for their loud howls, which can travel more than one mile through dense rain forest. These monkeys are native to South and Central American forests. Threats include human predation, habitat destruction, and capture for pets or zoo animals. Fifteen species are recognized. Previously classified in the family Cebidae, they are now placed in the family Atelidae.',
        image: './howler-monkey.jpg',
        exhibit_Id: 3
      },
      {
        name: 'Lemur',
        species: 'Lemuroidea',
        information:
          'Lemurs share resemblance with other primates, but evolved independently from monkeys and apes. Due to Madagascars highly seasonal climate, lemur evolution has produced a level of species diversity rivaling that of any other primate group. Until shortly after humans arrived on the island around 2,000 years ago, there were lemurs as large as a male gorilla. Most species have been discovered or promoted to full species status since the 1990s; however, lemur taxonomic classification is controversial and depends on which species concept is used.',
        image: './lemur.jpg',
        exhibit_Id: 3
      },
      {
        name: 'Bengal Tiger',
        species: 'Panthera tigris tigris',
        information:
          'The Bengal tigers historical range covered the Indus River valley until the early 19th century, almost all of India, Pakistan, southern Nepal, Bangladesh, Bhutan and southwestern China. Today, it inhabits India, Bangladesh, Nepal, Bhutan and southwestern China. Indias tiger population was estimated at 2,603–3,346 individuals by 2018. Around 300–500 individuals are estimated in Bangladesh, 355 in Nepal by 2022, and 90 individuals in Bhutan by 2015.',
        image: './bengel-tiger.jpg',
        exhibit_Id: 3
      },
      {
        name: 'Spider Monkey',
        species: 'Simia paniscus',
        information:
          'Spider monkeys are New World monkeys belonging to the genus Ateles, part of the subfamily Atelinae, family Atelidae. Like other atelines, they are found in tropical forests of Central and South America, from southern Mexico to Brazil. The genus consistes of seven species, all of which are under threat; the brown spider monkey is critically endangered. They are also notable for their ability to be easily bred in captivity.',
        image: './spider-monkey.jpg',
        exhibit_Id: 3
      },
      {
        name: 'Tortoise',
        species: 'Testudinidae',
        information:
          'Like other turtles, tortoises have a shell to protect from predation and other threats. The shell in tortoises is generally hard, and like other members of the suborder Cryptodira, they retract their necks and heads directly backward into the shell to protect them.',
        image: './turtle.jpg',
        exhibit_Id: 5
      },
      {
        name: 'king-cobra',
        species: 'Ophiophagus hannah',
        information:
          'Like most cobras and mambas, the king cobras threat display includes spreading its neck-flap, raising its head upright, puffing, and hissing.',
        image: './king-cobra.jpg',
        exhibit_Id: 5
      },
      {
        name: 'pit-viper',
        species: 'The Crotalinae',
        information:
          'Like all other vipers, they are venomous. They are distinguished by the presence of a heat-sensing pit organ located between the eye and the nostril on both sides of the head.',
        image: './pit-viper.jpg',
        exhibit_Id: 5
      },
      {
        name: 'Legless lizard',
        species: 'Pygopodidae',
        information:
          'a family of squamates with reduced or absent limbs, and are a type of gecko',
        image: './legless-lizard.jpg',
        exhibit_Id: 5
      },
      {
        name: 'chameleon',
        species: 'Chamaeleonidae',
        information:
          'a distinctive and highly specialized clade of Old World lizards with 202 species',
        image: './chameleon.jpg',
        exhibit_Id: 5
      },
      {
        name: 'Burmese Python',
        species: 'Pythonidae',
        information:
          'not much to be said about this animals except that they can grow up to 11ft long and swallow a full grow human whole',
        image: './burmese-python.jpg',
        exhibit_Id: 5
      },
      {
        name: 'Alligator',
        species: 'Crocodilia',
        information:
          'Adult alligators are black or dark olive-brown with white undersides, while juveniles have bright yellow or whitish stripes which sharply contrast against their dark hides, providing them additional camouflage amongst reeds and wetland grasses',
        image: './alligator.jpg',
        exhibit_Id: 5
      },
      {
        name: 'Komodo Dragon',
        species: 'Varanus komodoensis',
        information:
          'Komodo dragons are apex predators, and dominate the ecosystems in which they live. Komodo dragons hunt and ambush prey including invertebrates, birds, and mammals.',
        image: './komodo.jpg',
        exhibit_Id: 5
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('animals', null, {})
  }
}
