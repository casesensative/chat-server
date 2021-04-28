let messages = [];
let id = 0;

module.exports = {
  readMsgs: (req, res) => {
    res.status(200).send(messages);
  },

  createMsg: (req, res) => {
    const {text, time} = req.body;
    let newMessage = {
      text,
      time,
      id,
    }
    id++;
    messages.push(newMessage);
    res.status(200).send(messages);

  },

  deleteMsg: (req, res) => {
    const {id} = req.params;
    const index = messages.findIndex((e) => +id === e.id);
    messages.splice(index, 1);
    res.status(200).send(messages);
  },

  updateMsg: (req, res) => {
    const {id} = req.params;
    const {text} = req.body;
    const index = messages.findIndex((e) => +id === e.id);
    let message = messages[index];
    let newMessage = {
      text: text || message.text,
      time: message.time,
      id: message.id
    };

    messages.splice(index, 1, newMessage);
    res.status(200).send(messages);
  },
};
