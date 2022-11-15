const router = require('express').Router()
const controller = require('../controllers/ScheduleController')
const middleware = require('../middleware')

router.get('/', controller.GetSchedule)
router.get('/:id')
router.post(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateSchedule
)
router.put('/schedule_id', controller.UpdateSchedule)
router.delete('/:schedule_id', controller.DeleteSchedule)

module.exports = router
