import express, { json } from 'express';
import rte from '../routes/rte.mjs';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Hello World!');
});

router.use('/rte', rte);

export default router;