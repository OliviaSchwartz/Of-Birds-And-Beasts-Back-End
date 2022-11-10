const router = require('express').Router()
const controller = require('../controllers/ScheduleController')
const middleware = require('../middleware')

router.get('/', controller.GetSchedule)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateSchedule
)
// router.put('/:schedule_id', controller.UpdatePost)
// router.delete('/:schedule_id', controller.DeletePost)

// module.exports = router
