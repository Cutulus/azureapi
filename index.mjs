import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import "express-async-errors";
import morgan from 'morgan';
import router from './src/srvcs/router.mjs';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

app.use('/', router);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));