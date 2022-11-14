const { Exhibits } = require('../models')

const GetAllExhibits = async (req, res) => {
  try {
    const exhibits = await Exhibits.findAll()
    res.send(exhibits)
  } catch (error) {
    throw error
  }
}

const GetOneExhibit = async (req, res) => {
  try {
    const exhibit = await Exhibits.findByPk(req.params.exhibit_Id)
    res.send(exhibit)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllExhibits,
  GetOneExhibit
}
