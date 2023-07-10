import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, erorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js'

connectDB();

const app = express();

app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('server is ready'));

app.use(notFound);
app.use(erorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));