const express=require('express');
const router=express.Router();
const {getItem, addItem, getItems, deleteItem}=require('../controllers/items');

router.route('/').get(getItems).post(addItem);
router.route('/:id').get(getItem).delete(deleteItem);


module.exports=router;

