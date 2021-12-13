const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();

const {mongoose} = require('./database');

// Settings
app.set('port', process.env.PORT || 3000 );

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '/app/')));
app.use(cors({origin: 'http://localhost:4200'}));
// Routes
app.use(require('./routes/banco.routes'));

// Starting the server
app.listen(3000, () => {
    console.log('Server on port', app.get('port'));

});