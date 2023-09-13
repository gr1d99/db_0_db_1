import express from 'express';
const router = express.Router();
import app from "../app";

/* GET home page. */
router.get('/', async function(req, res, next) {
  const r = await app.locals.db.query('SELECT 1 + 1');
  res.json({ title:  r.recordset});
});

export default router;
