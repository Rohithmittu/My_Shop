import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";
// import { removeItemsFromCart } from "../../actions/cartAction";

const CardItemCard = ({ item , deleteCartItems }) => {
  return (
    <div className='CardItemCard'>
      <img src={item.image} alt='ssa' className="cardItemCardImage" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ${item.price}`}</span>
        <p onClick={() => deleteCartItems(item.product)}>Remove</p>
      </div>
    </div>
  );
};

export default CardItemCard;
