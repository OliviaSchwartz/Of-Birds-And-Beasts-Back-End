const { Animals } = require('../models')

const GetAllAnimals = async (req, res) => {
  try {
    const animals = await Animals.findAll()
    res.send(animals)
  } catch (error) {
    throw error
  }
}

const GetOneAnimal = async (req, res) => {
  try {
    const animal = await Animals.findByPk(req.params.id)
    res.send(animal)
  } catch (error) {
    throw error
  }
}

const GetAnimalType = async (req, res) => {
  console.log('this is the thing', req.params)
  try {
    const animals = await Animals.findAll({
      where: {
        exhibit_Id: req.params.id
      }
    })
    res.send(animals)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllAnimals,
  GetOneAnimal,
  GetAnimalType
}
