import React from "react";
import "./orderSuccess.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const OrderSuccess = () => {
  return (
    <div className='orderSuccess'>
      <CheckCircleIcon />
      <Typography>Your order has been Placed succesfully</Typography>
      <Link to='/orders'>View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
