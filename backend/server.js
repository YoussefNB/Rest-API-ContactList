const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const {route:contactRouter} = require('./routes/contacts')

app.use(bodyParser.json())
app.use('/contacts',contactRouter)


const port = 3001
app.listen(port,(err) => {
    if (err) {
        console.log('Server is not running, an error occured : \n'+ err);
    } else {
        console.log('Server is running on port : '+ port);
        
    }
});