import type express from 'express'
import app from '../app'

const usersController = {
  create: async (req: express.Request, res: express.Response) => {
    try {
      const result = app.locals.db
        .res.json({ message: 'yeeey' })
    } catch (e) {
      res.status(400).json(e)
    }
  }
}

export { usersController }
