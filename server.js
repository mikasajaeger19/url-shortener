const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true', {
  useNewUrlParser: true,
  dbName: 'urlShortener',
  useUnifiedTopology: true
}).then(() => {
    console.log("Connected to DB");
}).catch((error) => {
    console.error("Error connecting to DB:", error);
});

app.listen(process.env.PORT || 3000);
