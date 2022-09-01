const productModel = require('../Models/Product')
const { validationResult } = require('express-validator');

const storeProduct = (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.json({error : error.array()})
    }
    const {user_id, sku, pName, price} = req.body
    productModel.create({
        user: user_id,
        productSKU: sku,
        productName: pName,
        price
    }).then(note => { res.json(note); });
}

module.exports = storeProduct