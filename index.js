const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require("./routes/ToDoRoute");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3500;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL)
    .then(() => { console.log(`Connected to MongoDB....`) })
    .catch((err) => { console.log(err) })

app.use(routes);

app.listen(port, () => console.log(`Server is up at ${port}`));