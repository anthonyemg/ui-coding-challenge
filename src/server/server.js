const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
// able to read js in cli
app.use(bodyParser.json());
// attach routes file
app.use(routes);

app.listen(3000, () => console.log('Listening on port 3000'));
