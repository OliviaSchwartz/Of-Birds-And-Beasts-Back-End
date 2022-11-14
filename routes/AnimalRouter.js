const router = require('express').Router()
const controller = require('../controllers/AnimalController')

router.get('/', controller.GetAllAnimals)
router.get('/:id', controller.GetOneAnimal)

module.exports = router
