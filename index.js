const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const port = process.env.PORT || 4000;

let app = express();

app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(expressValidator());

consign().include('routes').include('utils').into(app);

app.listen(port, '127.0.0.1', () => {
    console.log("Servidor rodando! %s", port);
});
