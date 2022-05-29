const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6j8zx.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('manufacturer DB Cunnected');
  // perform actions on the collection object
  client.close();
});





app.get('/', (req, res) => {
    res.send('Running Tools Manufacturer Server');
});

app.listen(port, () => {
    console.log('listening to port', port);
});