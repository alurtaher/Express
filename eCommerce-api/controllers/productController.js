exports.getAllProducts = (req, res) => {
    return res.send('Fetch all products.')
};

exports.getProductById = (req, res) => {
    const id = req.params.id;
    return res.send(`Fetching a product by ${id}`)
};

exports.addProduct = (req,res)=>{
  res.send("Add a new Product")
}