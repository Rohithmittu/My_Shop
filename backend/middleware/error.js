const ErrorHandler = require("../utils/errorhandler")



module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.messsage = err.messsage || "Internal Server Error";

    // Wrong Mogodb ID Error

    if(err.name === "CastError"){
        const message = `Resource not found. Invalid:${err.path}`
        err = new ErrorHandler(message,400);
    }

    // Mongoose duplicate key error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`
        err = new ErrorHandler(message,400);
    }

    // wrong JWT error
    if(err.name === "jsonwebTokenError"){
        const message = `json Web tokenis is invalid, Try again`
        err = new ErrorHandler(message,400);
    }

    // JWT EXPIRE error
    if(err.name === "jsonwebExpiredError"){
        const message = `json Web tokenis is invalid, Try again`
        err = new ErrorHandler(message,400);
    }
    

    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    })
}