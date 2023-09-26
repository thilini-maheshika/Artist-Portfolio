const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

require("dotenv").config();

const bodyParser = require('body-parser'); // to convert json => js object

//import routes
const eventRoutes = require('./routes/event');

//app
const app = express();
app.use(express.json())
app.use(cors())

//db
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB CONNECTED")).catch((err) => console.log("DB CONNECTION ERROR", err));

//middleware
app.use(morgan('dev'));
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json());

//port
const port = process.env.PORT || 3004;

//route middleware
app.use(eventRoutes);

//Listener
const server = app.listen(port, () => 
    console.log(`Server is running on port ${port}`)
);

