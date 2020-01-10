const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hola Garage!");
});
 
module.exports.app = app;
