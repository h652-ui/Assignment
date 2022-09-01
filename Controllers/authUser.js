const userModel = require('../Models/User')
const productModel = require('../Models/Product')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const authUser = (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    const {email, pwd} = req.body
    userModel.findOne({ email }).then(async (matchedUser) => {
        if (matchedUser) {
            if(bcrypt.compareSync(pwd, matchedUser.password)){   
                productModel.find({user:matchedUser.id}).then(
                    async (products) => {
                        return res.render('products', {id : matchedUser.id, products});
                    }
                )
            }
            else{
                return res.status(400).json({ Access: "Denied" });
            }
        }
        else {
            return res.status(400).json({ error: "Invalid Credentials : Email not Exist" });
        }
    })
}

module.exports = authUser