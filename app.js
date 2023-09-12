const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const cors = require('cors')

// connect to database
const connectDB = require('./database/connect');

// routes
const person = require('./routes/person');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.use('/api', person);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    } catch (err) {
        console.log(err);
    }
};

start();

