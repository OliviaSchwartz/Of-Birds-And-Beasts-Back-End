const { Schedules } = require('../models')
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

const CreateSchedule = async (req, res) => {
  try {
    let { date } = req.body
    let { patron_Id } = req.body
    let newSchedule = { date: date, patron_Id: parseInt(patron_Id) }
    const schedule = await Schedules.create(newSchedule)
    res.send(schedule)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSchedule,
  CreateSchedule
}
