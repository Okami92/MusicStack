const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');

import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";


mongoose.connect('mongodb://localhost:auth/auth');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json('*/*'));
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);