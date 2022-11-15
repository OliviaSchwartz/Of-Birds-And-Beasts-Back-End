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

const CreateSchedule = async (req, res) => {
  try {
    let patronId = parseInt(req.params.patron_Id)
    console.log('this is patronID', patronId)
    let scheduleBody = {
      patronId,
      ...req.body
    }
    console.log(scheduleBody)
    let schedule = await Schedules.create(scheduleBody)

    res.send(schedule)
  } catch (error) {
    throw error
  }
}

// const CreateSchedule = async (req, res) => {
//   try {
//     let { date } = req.body
//     let { patron_Id } = req.body
//     let newSchedule = { date: date, patron_Id: patron_Id }
//     const schedule = await Schedules.create(newSchedule)
//     res.send(schedule)
//   } catch (error) {
//     throw error
//   }
// }

const UpdateSchedule = async (req, res) => {
  try {
    const updatedSchedule = await Schedule.findByIdAndUpdate(
      req.params.schedule_id,
      //Check that this line works once front-end is ready to add an attraction to the schedule
      { $push: { attractions: req.body.id } }
    )
    res.json(updatedSchedule)
  } catch (error) {
    throw error
  }
}

const DeleteSchedule = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSchedule,
  GetOneSchedule,
  CreateSchedule,
  UpdateSchedule,
  DeleteSchedule
}
