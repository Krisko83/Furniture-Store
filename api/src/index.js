import { prisma } from './lib/prisma.js'
import express from 'express'
import routes from './routes.js';
import cors from 'cors';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use(authMiddleware)

app.use(routes);

app.listen(3030, () => console.log('Server is running at http://localhost:3030...'))