const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const importSchema = require('graphql-import');


// ----------- Bootstrap app -----------

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());



// ------------ Graphql ----------------






// ------------ Start app --------------

app.listen(8000, () => console.log('App running at localhost:8000'));
