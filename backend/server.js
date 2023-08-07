const app = require("./app");

const dotenv = require("dotenv");
const cloudinary = require("cloudinary")
const connectDatabase = require("./config/database");

// Handling uncaught Exeption
process.on("uncaughtException", error => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught Exeption`);
  process.exit(1);
});

// Config

dotenv.config({ path: "backend/config/config.env" });

// Connecting to databases

connectDatabase();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUNDINARY_API_SECRET,

})



const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});



// unhandle Promise Rejection

process.on("unhandledRejection", err => {
  console.log(`Error: ${err.messsage}`);
  console.log(`Shutting down the server due to unhandles Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
