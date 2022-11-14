const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const AuthRouter = require('./routes/AuthRouter')
const ScheduleRouter = require('./routes/ScheduleRouter')
const ExhibitRouter = require('./routes/ExhibitRouter')
const app = express()

// const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', AuthRouter)
app.use('/schedule', ScheduleRouter)
app.use('/exhibit', ExhibitRouter)

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
// app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
