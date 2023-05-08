const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require('./utils/path');

const app = express();

const settingsRouter = require('./routes/settings');
const contentRouter = require('./routes/content');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.getPathName('public')));

app.use('/settings', settingsRouter);
app.use('/content', contentRouter);

app.listen(3579);
