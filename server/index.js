const express = require('express');
const mc = require('./controllers/message_controller')
const app = express();
const port = 3001;

app.use(express.json());




app.listen(port, () => console.log('Server running on port: ' + port));