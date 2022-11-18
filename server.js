const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const AuthRouter = require('./routes/AuthRouter')
const ScheduleRouter = require('./routes/ScheduleRouter')
const ExhibitRouter = require('./routes/ExhibitRouter')
const AnimalRouter = require('./routes/AnimalRouter')
const app = express()


const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', AuthRouter)
app.use('/schedule', ScheduleRouter)
app.use('/exhibit', ExhibitRouter)
app.use('/animal', AnimalRouter)

app.get('/', (req, res) => res.json({ message: 'Server Works' }))

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
