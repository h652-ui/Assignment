const productModel = require('../Models/Product')

const deleteProduct = (req, res) => {
    productModel.findById(req.params.id).then(async (note) => {
        if(note){
            productModel.findByIdAndDelete(note.id).then(() => {
                return res.send("Product is Deleted")
            })
        }else{
            console.log(req.params.id)
            return res.status(404).json({error : 'Product not Found'})
        }
    })
}

module.exports = deleteProduct