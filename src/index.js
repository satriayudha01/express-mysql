require('dotenv').config();
const PORT = process.env.PORT || 5000;

const express = require('express');
const usersRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');

const app = express(); 
const port = 4000; // port 4000 backend, port 3000 frontend

app.use(middlewareLogRequest); 
app.use(express.json()); // middleware mengizinkan reques body berupa json
 
app.use('/users', usersRoutes); // grouping untuk path /users dengan mengimport usersRoutes

app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}..`);
})



