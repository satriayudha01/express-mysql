const express = require('express'); // import core module express
require('dotenv').config(); // import modules pihak ketiga dotenv 
const PORT = process.env.PORT || 5000; // import local file .env untuk variable PORT | PORT 4000 backend, port 3000 frontend
const usersRoutes = require('./routes/users'); // import local module pada folder ./routes/users
const middlewareLogRequest = require('./middleware/logs'); // import local module pada folder ./middleware/logs

const app = express(); // create server

app.use(middlewareLogRequest); 
app.use(express.json()); // middleware mengizinkan reques body berupa json
 
app.use('/users', usersRoutes); // grouping untuk path /users dengan mengimport usersRoutes

app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}..`);
})



