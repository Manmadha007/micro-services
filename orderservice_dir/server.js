const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Order Service is running!');
});

app.listen(port, () => {
  console.log(`Order Service is listening on port ${port}`);
});
