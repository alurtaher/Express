const fetchUsers = (req,res)=>{
    res.send('Fetch the cart items for a specific user')
}

const addProduct = (req,res)=>{
    res.send("Add a product to the user's cart")
}

module.exports = {
    fetchUsers,
    addProduct
}