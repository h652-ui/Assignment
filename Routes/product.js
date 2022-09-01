const express = require('express')
const router = express.Router()
const { body } = require('express-validator');
const storeProduct = require('../Controllers/storeProduct')

router.post('/create', [
    body('sku', 'Must be of 5 digit').isLength({ min: 5 }),
    body('pName', 'Cannot be Empty').exists()], storeProduct)

router.get('/create/:id', (req, res)=>{
    const id = req.params.id
    res.render('addProduct', {id})
})

// router.put('/updatenote/:id', require('../Controllers/updateNotes'))
router.get('/deleteproduct/:id',  require('../Controllers/deleteProduct'))
module.exports = router