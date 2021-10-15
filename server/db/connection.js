const knex = require('knex')
const config = require('./knexfile')

const env = 'development'
const connection = knex(config[env])

module.exports = connection
