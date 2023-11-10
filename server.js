'use strict';
console.log('server file is connected');

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const campground = require('./modules/campground.js');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5555;

app.get('/', (req, res) => res.status(200).send('Hello from the Server!'));
app.get('/campground', campgroundhandle);

function campgroundhandle(req, res) {
  const { parkCode, description, name } = req.query;
  // console.log('request.query', parkCode, description, name);
  campground(parkCode, description, name)
    .then(park => res.status(200).send(park))
    .catch((error) => {
      console.error(error);
      res.status(500).send('Something went wrong!');
    });
}

app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
