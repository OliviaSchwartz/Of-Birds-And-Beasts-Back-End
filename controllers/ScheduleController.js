const { Patrons, Schedules } = require('../models')
const middleware = require('../middleware')
const { Model } = require('sequelize')
const schedule_exhibit = require('../models/schedule_exhibit')

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
    const schedule = await Schedules.findByPk({
      where: { schedule_Id: req.params.schedule_Id }
    })
    console.log(`This is one schedule`, schedule)
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
    console.log(schedules)
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
    let scheduleId = parseInt(req.params.schedule_Id)
    let newSchedule = await Schedules.update(req.body, {
      where: { id: scheduleId }
    })
    res.send(newSchedule)
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

// const UpdateSchedule = async (req, res) => {
//   try {
//     const updatedSchedule = await Schedules.findByPk(
//       req.params.schedule_Id,
//       //Check that this line works once front-end is ready to add an attraction to the schedule
//       { $push: { exhibits: req.body } }
//     )
//     await Schedules.update({ where: { id: updatedSchedule } })
//     res.json(updatedSchedule)
//   } catch (error) {
//     throw error
//   }
// }
