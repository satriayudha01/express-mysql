const dbPool = require('../config/database');


// function mengembalikan seluruh data yg tersimpan dalam database - GET - tanpa membutuhkan parameter saat pemanggilannya
const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    
    return dbPool.execute(SQLQuery);
}

// function yg bertugas untuk menambahkan user baru ke dalam database - POST - membutuhkan 1 buah parameter saat pemanggilannya (body)
const createNewUser = (body) => {
    const SQLQuery = `  INSERT INTO users (name, email, address) 
                        VALUES ('${body.name}', '${body.email}', '${body.address}')`;   


    return dbPool.execute(SQLQuery);
}

// function yg bertugas untuk mengubah data user berdasarkan body yg dikirimkan - PATCH - membutuhkan 2 buah parameter saat pemanggilannya (body, idUser)
const updateUser = (body, idUser) => {
    const SQLQuery = `UPDATE users 
                        SET name='${body.name}', email='${body.email}', address='${body.address}' WHERE idUsers=${idUser}`;

    return dbPool.execute(SQLQuery);
}   

// function yg bertugas untuk menghapus data user berdasarkan idUser - DELETE - membutuhkan 1 buah parameter saat pemanggilannya (idUser)

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
}

