const express = require("express");
const PORT = 8000;
const app = express();
const router = require("./routes/router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//env file configration
dotenv.config();
//use router
app.use(router);

//check monodb connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});