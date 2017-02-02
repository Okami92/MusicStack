import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './router';

const app = express();

mongoose.connect('mongodb://localhost:auth/auth');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json('*/*'));
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
