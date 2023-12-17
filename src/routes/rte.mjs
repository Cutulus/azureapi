import express from 'express';
import { db } from '../srvcs/database.mjs';
import { ObjectId } from 'mongodb';

const router = express.Router();

const coll = '{collection}';

router.get('/', async (req, res) => {
  const collection = db.collection(coll);
  const result = await collection.find({}).toArray();
  res.send(result).status(200);
});

router.get('/:id', async (req, res) => {
  const collection = db.collection(coll);
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);
  if (!result) {
    res.status(404).send({ message: "No record found" });
  } else {
    res.send(result).status(204);
  }
});

router.post('/new', async (req, res) => {
  const Auth = req.headers.authorization;
  if (!Auth) { return res.status(401).send({ message: 'You are not authenticted.' }); }
  const token = await Auth.split(' ')[1];
  if (!token) { return res.status(401).send({ message: 'You are not authorized.'}); }
  const coll = await db.collection(coll);
  if (token === process.env.TOKEN) {
    const result = await coll.insertOne(req.body);
    return res.json({result});
  } else { return res.status(401).send({ message: 'You are not authorized.'}); }
});

export default router;