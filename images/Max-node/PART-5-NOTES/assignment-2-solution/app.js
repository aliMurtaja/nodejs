const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const express = require('express');

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mainRoutes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);

app.listen(3002);