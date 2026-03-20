import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { connectMongoDB } from './db/connectMongoDB.js';

import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import authRoutes from './routes/authRoutes.js';
import notesRoutes from './routes/notesRoutes.js';

import { errors } from 'celebrate';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(
  cors({
    origin: 'http://localhost:3000', // фронтенд
    credentials: true, // важно для HttpOnly кук
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use(authRoutes);
app.use(notesRoutes);

app.use(userRoutes);

app.use(notFoundHandler);

app.use(errors());

app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
