const { Patrons } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const patron = await Patrons.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      patron &&
      (await middleware.comparePassword(
        patron.passwordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: patron.id,
        email: patron.email
      }
      let token = middleware.createToken(payload)
      return res.send({ patron: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, name } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const patron = await Patrons.create({ email, passwordDigest, name })
    res.send(patron)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const patron = await Patrons.findOne({
      where: { email: req.body.email }
    })
    if (
      patron &&
      (await middleware.comparePassword(
        patron.dataValues.passwordDigest,
        req.body.oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(req.body.newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: 'Success', msg: 'Password updated' })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}
