const express = require('express');
const cors = require("cors");
const app = express();
const roomRouter = require('./routes/rooms')
const dataRouter= require('./routes/data')
const port = 3000; // You can choose a different port if needed

// app.use(cors);

app.get('/', (req, res) => {
  
  res.send({
    status:'Hi how are you'
  }
) 
});
app.use('/', roomRouter);
app.use('/',dataRouter);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});