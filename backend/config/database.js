const mongoose = require("mongoose");



const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI).then(()=>{
    console.log("connected with server succesfully")
  })
};

module.exports = connectDatabase;
