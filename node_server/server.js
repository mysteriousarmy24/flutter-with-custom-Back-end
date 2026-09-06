const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

//middlelewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

//configure routes


//connect to DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDb connected",PORT))
  .catch((error) => console.log("MongoDb connection error", error));

//start the server
app.listen(PORT,()=>{
    console.log(`Sever is running on the port ${PORT}`);
});