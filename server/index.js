const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/fortune", (req, res) => {
  const fortunes = ['A golden egg of opportunity falls into your lap this month.',
  'A light heart carries you through all the hard times.','Listen not to vain words of empty tongue.','You are in good hands this evening.','Your abilities are unparalleled.'
  ];
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
})

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});



const {
  createGoal,
  deleteGoal,
  completeGoal,
} = require("./goals.js");

app.post('/api/goals',createGoal);
app.delete('/api/goals/:id',deleteGoal);
app.put('/api/goals/:id',completeGoal)
app.listen(4000, () => console.log("Server running on 4000"));
