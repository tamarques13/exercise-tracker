const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = {}
let idCounter = 1

app.post('/api/users', (req, res) => {
  const usernameInput = req.body.username

  const existingUser = Object.values(users).find(user => user.username === usernameInput);

  if (existingUser) {
    return res.json({
      username: existingUser.username,
      _id: existingUser._id
    });
  }

  const id = idCounter++;
  users[id] = {
    username: usernameInput,
    _id: id
  };

  console.log(users)

  res.json({
    username: usernameInput,
    _id: id
  });
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
