import cors from 'cors';
import dotenv from 'dotenv';
import express, { type Express } from 'express';

dotenv.config();

const app: Express = express();

app.set('trust proxy', true);

// middlewares
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

app.listen(process.env.PORT, () => {
  const { NODE_ENV, HOST, PORT } = process.env;
  console.log(`Сервер (${NODE_ENV}) запущен: http://${HOST}:${PORT}`);
});
