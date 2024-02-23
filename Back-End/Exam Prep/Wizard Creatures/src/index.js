const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const configExpress = require('./config/configExpress');
const configHandlebars = require('./config/configHandlebars');

const app = express();
const port = 3000;

configExpress(app);
configHandlebars(app)

app.use(routes);

mongoose.connect('mongodb://127.0.0.1:27017/wizard-creatures')
    .then(() => {
        console.log('DB Connected');

        app.listen(port, () => console.log(`App is listening on http://127.0.0.1:${port}...`));
    }).catch((err) => console.log('Error when attempting connection to DB'));
