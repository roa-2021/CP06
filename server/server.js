const express = require('express')
const path = require('path')

const server = express()
const listRoutes = require('./routes/list')

//middleware
server.use(express.json())
server.use(express.static(path.join('server', 'public')))

//listen for list api
server.use('/api/list', listRoutes)

module.exports = server