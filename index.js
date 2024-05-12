const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000; // You can choose a different port if needed




app.use(cors);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});