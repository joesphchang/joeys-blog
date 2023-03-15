import express from "express";
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js';
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(8000, () => {
    console.log('Connected!');
})