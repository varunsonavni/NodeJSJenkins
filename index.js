const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>In 6666666666666666 $$$ App</h1> <h4>Message: Success Done Updating</h4> <p>Version 6.0.0</p>');
 })


app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
