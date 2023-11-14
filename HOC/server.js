const express = require("express");
const app = express();
const port = 3000;

var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
let currentUser = {
    id: '123',
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies:['swimming','bicycling','video games']
}
let users = [
  {
    id: "123",
    name: "John Doe",
    age: 54,
    hairColor: "Brown",
  },
  {
    id: "233",
    name: "John Doe",
    age: 54,
    hairColor: "Brown",
  },
    {
      id: "323",
      name: "John Doe",
      age: 54,
      hairColor: "Brown"
    },
];


app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json(users.find(user=>user.id===id))
})

app.post('/users/:id', (req, res) => {
  res.json({ 'gud':'gud'})
})


app.listen(8080, () => {
  console.log(`Example app listening on port 8080`);
});
