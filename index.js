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

const users = []
const logs = []
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

  const id = String(idCounter++);
  const newUser = { username: usernameInput, _id: id };

  users.push(newUser)

  res.json({
    username: usernameInput,
    _id: id
  });
})

app.post('/api/users/:_id/exercises', (req, res) => {
  const id = req.params._id
  const descriptionInput = String(req.body.description);
  const durationInput = Number(req.body.duration)
  let dateInput = req.body.date

  if (!dateInput) {
    dateInput = new Date();
  } else {
    dateInput = new Date(dateInput);
  }

  const formattedDate = dateInput.toDateString();

  const existingUser = Object.values(users).find(user => user._id === id);
  if (!existingUser) res.json({ error: "User not found" });

  const newExercise = {
    description: descriptionInput,
    duration: durationInput,
    date: formattedDate,
    _id: existingUser._id
  }

  logs.push(newExercise)

  res.json({
    username: existingUser.username,
    description: descriptionInput,
    duration: durationInput,
    date: formattedDate,
    _id: existingUser._id
  })
})

app.get('/api/users/', (req, res) => {

  res.json(users)
})

app.get('/api/users/:_id/logs', (req, res) => {
  const id = req.params._id

  const existingUser = users.find(user => user._id === id);
  if (!existingUser) return res.json({ error: "User not found" });

  const userLogs = logs.filter(log => log._id === id);

  res.json({
    username: existingUser.username,
    _id: id,
    count: userLogs.length,
    log: userLogs
  });
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
