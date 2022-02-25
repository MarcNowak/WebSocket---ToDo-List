const express = require('express');
const path = require('path');
const app = express();
const socket = require('socket.io');
const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running');
});

const io = socket(server);

const tasks = [];

app.get('*', (req, res) => {
  res.send('Not found...');
});

io.on('connection', (socket) => {
  console.log('a user is connected');
});

app.use((req, res) => {
  res.status(404).send({ message: 'error 404: not found...' })
});