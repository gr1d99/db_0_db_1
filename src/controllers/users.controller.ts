import type express from 'express'
import app from '../app'
import mssql from 'mssql'

const procedures = {
  addUser: 'AddUser'
}

const usersController = {
  create: async (req: express.Request, res: express.Response) => {
    try {
      const { id, name } = req.body
      const result = await app.locals.db.request()
        .input('ID', id)
        .input('Name', name)
        .output('UID', mssql.Int)
        .output('UName', mssql.VarChar(255))
        .execute(procedures.addUser)
      res.json({ result })
    } catch (e) {
      res.status(400).json(e)
    }
  }
}

export { usersController }
