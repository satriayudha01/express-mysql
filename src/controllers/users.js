const UsersModel = require('../models/users');


// controller untuk mengatur method request GET - READ ALL USER
const getAllusers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();
    
        res.json({
            message: 'GET users success',
            data: data
        })
    } catch (error) {
        res.status(500).json ({
            massage: 'Server Error',
            serverMessage: error,
        })
        
    }
}

// controller untuk mengatur method request POST - CREATE NEW USER
const createNewUser = async (req, res) => {
    const {body} = req;
    
    try {
        await UsersModel.createNewUser(body);
        res.json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
    }
}

// controller untuk mengatur method request UPDATE - UPDATE USER BERDASARKAN ID
const updateUser = async (req, res) => {
    const {idUsers} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUser(body, idUsers);
        res.json({
            message: 'UPDATE user success',
            data: {
                idUsers: idUsers,
                ...body
            },
        });
    } catch (error) {
        res.status(500).json ({
            massage: 'Server Error',
            serverMessage: error,
        })          
    }
}

// controller untuk mengatur method request DELETE - DELETE USER BERDASARKAN ID
const deleteUser = async (req, res) => {
    const {idUsers} = req.params;
    try {
        await UsersModel.deleteUser(idUsers);
        res.json({
            message: 'DELETE user success',
            data: `Data user dengan id ${idUsers} berhasil dihapus`
        })
    } catch (error) {
        res.status(500).json ({
            massage: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllusers,
    createNewUser,
    updateUser,
    deleteUser,
}


