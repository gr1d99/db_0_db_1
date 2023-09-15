import type mssql from 'mssql'

declare global {
  namespace Express {
    interface Locals {
      db: mssql.ConnectionPool
    }
  }
}
