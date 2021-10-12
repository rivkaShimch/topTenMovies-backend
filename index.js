const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
// const routerApi = require('./routes/api')


const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
mongoose.connection.on("error", err => {
    console.log("err", err)
  })
mongoose.connection.on("connected", () => {
    console.log("connected");
});

// app.use('/api', routerApi)

app.listen(process.env.LISTEN_PORT, () => {
    console.log("server is up on port "+process.env.LISTEN_PORT);
  });