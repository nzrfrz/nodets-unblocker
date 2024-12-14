import "dotenv/config";

import path from "path";
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";

var Unblocker = require('unblocker');

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const startServer = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server Running on:\n http://localhost:${process.env.PORT}`);
    }).on('upgrade', unblocker.onUpgrade);;
  } catch (error) {
    console.log("Server Error: \n", error.toString());
  }
};

const unblockerConfig = {
  prefix: '/proxy/',
};

const unblocker = new Unblocker(unblockerConfig);

app.use(unblocker);

startServer();