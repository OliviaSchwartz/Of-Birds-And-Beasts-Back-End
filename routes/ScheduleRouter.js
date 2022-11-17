const router = require('express').Router()
const controller = require('../controllers/ScheduleController')
const middleware = require('../middleware')

router.get('/', controller.GetSchedule)
router.get('/:id', controller.GetPatronSchedules)
router.get('/:schedule_Id', controller.GetOneSchedule)
router.post(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateSchedule
)
router.put('/:schedule_Id', controller.UpdateSchedule)
router.delete('/:schedule_Id', controller.DeleteSchedule)

module.exports = router
