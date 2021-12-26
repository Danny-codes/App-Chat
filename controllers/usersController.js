
const getAllUsers = async (req,res) => {
    res.send('All users')
}

const getAUser = async (req,res) => {
    res.send('A user')
}

const createUser = async (req,res) => {
    res.send('user created')
}

const updateUser = async (req,res) => {
    res.send('User updated')
}

const deleteUser = async (req,res) => {
    res.send('User deleted')
}

module.exports = {
    getAllUsers, getAUser, createUser, updateUser, deleteUser
}