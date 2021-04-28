let messages = [];
let id = 0;

exports.module = {
  readMsgs: (req, res) => {
    res.status(200).send(messages)
  }

  createMsg: (req, res) => {
    const {text, time} = req.body;
    let newMessage = {
      text,
      time,
      id,
    }
    id++;
    messages.push(newMessage);

  }

  deleteMsg: (req, res) => {
    const {id} = req.params;
    let index = +id;
    messages = messages.splice(index, 1);
    res.status(200).send(messages);
  }

  updateMsg: (req, res) => {
    const {id} = req.params;
    const {text} = req.body;
    let index = +id;
    let newMessage = {
      text,
      time: messages[index].time,
      id,
    };

    messages.splice(index, 1, newMessage);
  }


}
