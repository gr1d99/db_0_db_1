import mssql, { type config } from 'mssql'

const sqlConfig: config = {
  user: 'sa',
  password: '@Securepassword#',
  database: 'db_0',
  server: 'localhost',
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

const dbPool = new mssql.ConnectionPool(sqlConfig)

export default dbPool
