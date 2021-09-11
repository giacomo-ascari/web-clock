const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 80;
const app = express();

app.use("/web-clock", express.static('public'));

app.listen(port, () => {
    console.log("listening");
});
