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
const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'CREATE new user success',
        data: req.body
    })
}

// controller untuk mengatur method request UPDATE - UPDATE USER BERDASARKAN ID
const updateUser = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser : ', idUser);
    res.json({
        message: 'UPDATE user success',
        data: req.body,
    });
}

// controller untuk mengatur method request DELETE - DELETE USER BERDASARKAN ID
const deleteUser = (req, res) => {
    const {idUser} = req.params;
    res.json({
        message: 'DELETE user success',
        data: {
            id: idUser,
            name: "Satria Yudha",
            email: "satriayudha01@gmail.com",
            address: "Depok"
        }
    })
}

module.exports = {
    getAllusers,
    createNewUser,
    updateUser,
    deleteUser
}

