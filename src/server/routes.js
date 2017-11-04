const routes = require('express').Router();
const fs = require('fs');

routes.get('/database', (req, res) => {
  // reads the database.json file and sends to client
  fs.readFile('./database.json', (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

routes.post('/database', (req, res) => {
  // access the data in the database.json file
  fs.readFile('./database.json', (err, data) => {
    if (err) throw err;
    // turns the database into js
    oldData = JSON.parse(data);
    // using Object.assign we are overriding the database property with the updated property
    newData = JSON.stringify(Object.assign(oldData, req.body));
    // writing the database.json file with the updated data
    fs.writeFile('./database.json', newData, err => {
      if (err) throw err;
      res.sendStatus(200);
    });
  });
});

module.exports = routes;
