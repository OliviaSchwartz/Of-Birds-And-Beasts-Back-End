const { Patrons, Schedules } = require('../models')
const middleware = require('../middleware')
const { Model } = require('sequelize')

const GetSchedule = async (req, res) => {
  try {
    const schedules = await Schedules.findAll()
    res.send(schedules)
  } catch (error) {
    throw error
  }
}

const GetOneSchedule = async (req, res) => {
  try {
    const schedule = await Schedules.findByPk(req.params.id)
    res.send(schedule)
  } catch (error) {
    throw error
  }
}

const GetPatronSchedules = async (req, res) => {
  try {
    const schedules = await Schedules.findAll({
      where: {
        patron_Id: req.params.id
      }
    })
    res.send(schedules)
  } catch (error) {
    throw error
  }
}

const CreateSchedule = async (req, res) => {
  try {
    let patronId = parseInt(req.params.patron_Id)
    let scheduleContent = {
      patronId,
      ...req.body
    }
    let schedule = await Schedules.create(scheduleContent)
    res.send(schedule)
  } catch (error) {
    throw error
  }
}

const UpdateSchedule = async (req, res) => {
  try {
    const updatedSchedule = await Schedules.findByIdAndUpdate(
      req.params.schedule_id,
      //Check that this line works once front-end is ready to add an attraction to the schedule
      { $push: { exhibits: req.body.id } }
    )
    res.json(updatedSchedule)
  } catch (error) {
    throw error
  }
}

const DeleteSchedule = async (req, res) => {
  try {
    const deletedSchedule = parseInt(req.params.schedule_Id)
    await Schedules.destroy({ where: { id: deletedSchedule } })
    res.send({ message: `Deleted schedule with an id of ${deletedSchedule}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSchedule,
  GetOneSchedule,
  GetPatronSchedules,
  CreateSchedule,
  UpdateSchedule,
  DeleteSchedule
}
