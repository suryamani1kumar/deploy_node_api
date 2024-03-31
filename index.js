const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<h1>Hello world</h1>`);
});

app.listen(1000, () => console.log(`serveris running on 1000 port`));
