const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 

const notesRouter = require('./routes/notes.js');
const app = express();

mongoose.connect(String(process.env.MONGODB_URL) , {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.use(cors());
app.use("/notes", notesRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
