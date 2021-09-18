const express = require('express');
const cors = require('cors');

const router = require('./Router/index');
const sequelize = require('./connection');

const app = express();

const host ='localhost';
const port = 2020;


app.use(cors());
app.options('*',cors());

app.use(express.json());
sequelize.sync();

app.use('/', router);

app.listen(port, host, () => {
    console.log(`server is Running at ${host}:${port} `)
});
