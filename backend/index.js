const express= require('express');
const cors = require('cors');
const cookie= require('cookie-parser');

const items=require('./routes/items');
const auth=require('./routes/auth');

const connectDB=require('./db/connect');
require('dotenv').config();
const notFound=require('./middleware/not-found');
const errorHandler=require('./middleware/error-handler');
const authentication= require('./middleware/auth');
const port= process.env.PORT || 5000;

const app=express();
//Middleware
app.use(express.json());
app.use(cookie());
app.use(cors({credentials: true, origin: true}));

//Routes
app.use('/shoppinglist/auth',auth);
app.use('/shoppinglist',authentication,items);

app.use(notFound);
app.use(errorHandler);

const start= async ()=>{
   try{
      await connectDB(process.env.MONGO_URL);
      app.listen(port, console.log(`Server in ascolto porta ${port}`));
   }
   catch(error){
      console.log(error);
   }

}


start();