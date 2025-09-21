import { readFileSync } from 'node:fs';
import https from 'node:https';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { type Express } from 'express';

dotenv.config();

const app: Express = express();

const certPath = `${__dirname}/../../config/cert.cert`;
const keyPath = `${__dirname}/../../config/cert.key`;

const cert = readFileSync(certPath);
const key = readFileSync(keyPath);

const httpsOptions = {
  cert,
  key,
};

const { NODE_ENV, HOST, PORT, CORS_ORIGIN } = process.env;

// middlewares
app.use(express.json());
app.use(cors({ origin: CORS_ORIGIN, credentials: true }));

const server = https.createServer(httpsOptions, app);

server.listen(PORT, () => {
  console.log(`Сервер запущен в режиме "${NODE_ENV}": https://${HOST}:${PORT}`);
});
