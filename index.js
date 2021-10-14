const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const routerApi = require('./routes/api')
const bodyParser = require('body-parser')
var cors = require('cors')


const app = express();
app.use(cors())

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
app.use(bodyParser.json({ limit: '200mb' }));

app.use(bodyParser.urlencoded({
  extended: true,
  defer: true
}));
app.use('/api', routerApi)

app.listen(process.env.LISTEN_PORT, () => {
    console.log("server is up on port "+process.env.LISTEN_PORT);
  });