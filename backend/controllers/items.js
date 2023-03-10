const Item=require('../models/item')
const asyncWrapper=require('../middleware/async')
const { NotFoundError } = require('../errors')


const getItems= asyncWrapper(async (req,res)=>{
    const test= await Item.find({});
    if(!test){
        return next(createCustomError('Document not Found',404));
    }
    res.status(200).json(test);

});

const addItem = asyncWrapper(async (req,res) =>{
    const prova= await Item.create(req.body);
    res.status(201).json(prova); 
});

const getItem = asyncWrapper(async (req,res) =>{
    const {id:ItemID}=req.params;
    const item= await Item.findById(ItemID);
    if(!item){
        throw new NotFoundError('No item with that ID');
    }
    res.status(200).json(item); 
});

const deleteItem = asyncWrapper( async (req,res) =>{
    const{id:ItemID}=req.params;
    const item= await Item.findByIdAndDelete(ItemID);
    if(!item){
        throw new NotFoundError('No item with that ID');
    }
    res.status(200).json({msg:"Item Deleted"});

});


module.exports={
    getItems,
    addItem,
    getItem,
    deleteItem
}