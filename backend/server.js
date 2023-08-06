const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
//const uri = "mongodb://127.0.0.1:27017/activitiescollections";
const uri = "mongodb+srv://cherry703:q4073rqyOSNSVnGO@cluster0.ac1mmob.mongodb.net/activitiescollections";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// import routes
const bookRouter = require('./routes/activities');

// adding /activity to before all routes
app.use('/activity', bookRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
