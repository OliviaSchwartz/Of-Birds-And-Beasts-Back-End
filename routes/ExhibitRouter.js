const router = require('express').Router()
const controller = require('../controllers/ExhibitController')

router.get('/', controller.GetAllExhibits)
router.get('/:id', controller.GetOneExhibit)

module.exports = router
