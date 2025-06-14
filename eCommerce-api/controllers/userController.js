const fetchUsers = (req,res)=>{
    res.send('Fetch all users')
};

const fetchUserById = (req,res)=>{
    res.send(`Fetch a user by their ${req.params.id}`)
};

const addNewUser = (req,res)=>{
    res.send('Add a new user')
}

module.exports = {
    fetchUsers,
    fetchUserById,
    addNewUser
}