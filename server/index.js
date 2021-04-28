const express = require('express');
const mc = require('./controllers/message_controller');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', mc.readMsgs);
app.post('/api/messages', mc.createMsg);
app.put('/api/messages/:id', mc.updateMsg);
app.delete('/api/messages/:id', mc.deleteMsg);


app.listen(port, () => console.log('Server running on port: ' + port));