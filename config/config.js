

require('dotenv').config()
module.exports = {
  development: {
    database: 'OBAB_database_development',
    dialect: 'postgres'
  },
  test: {
    database: 'OBAB_database_tests',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}