//REQUIRES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//EXPRESS
const app = express();

//Habilitar cors
app.use(cors());

//MONGO
mongoose
  .connect("mongodb://localhost/turnos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(db => {
    console.log("DB Connected");
  })
  .catch(err => {
    console.log(err);
  });

//SETTINGS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//ROUTES
app.use(require("./routes/index"));

//SERVER
app.listen(4000, () => {
  console.log("Server started http://localhost:4000");
});
