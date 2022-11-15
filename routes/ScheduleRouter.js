const router = require('express').Router()
const controller = require('../controllers/ScheduleController')
const middleware = require('../middleware')

router.get('/', controller.GetSchedule)
router.get('/:id', controller.GetOneSchedule)
router.post(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateSchedule
)
router.put('/schedule_id', controller.UpdateSchedule)
router.delete('/:id', controller.DeleteSchedule)

module.exports = router
