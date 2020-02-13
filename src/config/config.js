import dotenv from 'dotenv'

const env = process.env.NODE_ENV || 'development'
switch (env) {
case 'development':
  dotenv.config({path: process.cwd() + '/.env'})
  break
case 'test':
  dotenv.config({path: process.cwd() + '/.env.test'})
}

const connection_details = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  mongo: process.env.MONGO
}

export const configs = {
  'test': connection_details,
  'development': connection_details,
  'production': connection_details
}
