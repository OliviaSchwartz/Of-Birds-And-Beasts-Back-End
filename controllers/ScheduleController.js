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
    const schedule = await Schedules.create({ ...req.body })
    res.send(schedule)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSchedule,
  CreateSchedule
}
