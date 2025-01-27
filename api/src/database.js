const mongoose = require('mongoose')
const URI = 'mongodb://localhost/petfood'


mongoose
.connect(URI)
.then(() => console.log('DB is UP'))
.catch((err) => console.log(err))