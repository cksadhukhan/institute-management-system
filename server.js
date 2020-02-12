const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const department = require('./routes/department');
const superadmin = require('./routes/superadmin');

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.get('/', (req, res) => { 
	res.send('Hello World root');
});

mongoose.connect('mongodb://localhost/kgei-project', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then( () => console.log('Successfully connected to Mongodb'))
.catch( err => console.log('Connection error ', err))

app.use('/api/department', department);
app.use('/api/superadmin', superadmin);

app.listen(5000, () => {
	console.log('App listening on port 5000');
})