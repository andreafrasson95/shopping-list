const {CustomAPIError}=require('../errors/custom-api')

const errorHandlerMiddleware=(err,req,res,next)=>{
    let customError = {
        statusCode: err.statusCode || 500,
        msg: err.message || 'Something went wrong try again later',
      }

    return res.status(customError.statusCode).json({msg:customError.msg, isError:true});
}

module.exports=errorHandlerMiddleware