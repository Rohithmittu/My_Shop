import React, { Fragment, useState } from "react";
import "./Search.css";
import MetaData from "../layout/MetaData";
import {useNavigate} from "react-router-dom"
// import {Router} from "react-router"



const Search = () => {
  const history = useNavigate(); 
  const [ keyword, setKeyword] = useState("");
  
  
  const searchSubmitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      // history.push(`./products/${keyword}`);
      history(`./products/${keyword}`);
    } else {
      // history.push(`/products`);
      history(`/products`);
    }
  };

  return (
    <Fragment>
      <MetaData title={`SEARCH A PRODUCT ---- ECOMMERCE`}   />
      
      <form onSubmit={searchSubmitHandler} className='searchBox'>
        <input
          type='text'
          placeholder='Search a product ...'
          onChange={e => setKeyword(e.target.value)}
        />
        <input type='submit' value='Search' />
      </form>
    </Fragment>
  );
};

export default Search;
