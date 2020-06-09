const express = require('express');
const apiRouter = require('./routes.js')

const app = express();

app.use(express.json());

app.use('/api/countries', apiRouter);


app.listen(process.env.PORT || '4000', () => {
    console.log(`server is running on port: ${process.env.PORT || '4000'}`);
});