import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";
import {useAlert} from "react-alert"
import Slider from "rc-slider";

// import Slider from "@mui/icons-material";
// import SliderValueLabel from "@mui/material/Slider/SliderValueLabel";
// import Slider from "@material-ui/core"
import { Typography } from "@mui/material";
import MetaData from "../layout/MetaData";


const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "tops",
  "Attire",
  "Camera",
  "SmartPhones",
]

const Products = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert()

  const { product_keyword } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0)

  const [price, setPrice] = useState([0, 25000]);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    // filteredProductsCount,
  } = useSelector(state => state.products);

  // const keyword = match.params.keyword

  const setCurrentPageNo = e => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProduct(product_keyword, currentPage, price,category,ratings));
  }, [dispatch, product_keyword, currentPage, price,category,ratings,alert,error]);

  // let count = filteredProductsCount

  // const options = {
  //   activePage: { currentPage },
  //   itemCountPerPage: { resultPerPage },
  //   totalItemCount: { productsCount },
  //   onChange: { setCurrentPageNo },
  //   nextpagetext: "Next",
  //   prevpagetext: "Prev",
  //   lastpagetext: "Last",
  //   itemclass: "page-item",
  //   linkclass: "page-link",
  //   activeclass: "pageItemActive",
  //   activelinkclass: "pageLinkActive",
  // };
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`PRODUCTS----ECOMMERCE`} />
          <h2 className='productsHeading'>Products</h2>
          <div className='products'>
            {products &&
              products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className='filterBox'>
            <Typography>Price</Typography>
            {/* <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay='auto'
              aria-labelledby='range-slider'
              min={0}
              max={25000}
            /> */}
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay='auto'
              aria-labelledby='range-slider'
              min={0}
              max={25000}
             />
            {/* <Range /> */}
          </div>

          <Typography>Categories</Typography>
          <ul className="categoryBox">
            {categories.map((category) => (
              <li
              className="category-link"
              key={category}
              onClick={() => setCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>

          <fieldset>
            <Typography component="legend">

              Rating Above

            </Typography>

              <Slider 

              value={ratings}
              onChange={(e,newRating)=>{
                setRatings(newRating);
              }}
              aria-labelledby="continuous-slider"
              min={0}
              max={5}
              valueLabelDisplay="auto"
              
              />

          </fieldset>

          {resultPerPage < productsCount && (
            <div>
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText='Next'
                prevPageText='Prev'
                firstPageText='1st'
                lastPageText='Last'
                itemClass='page-item'
                linkClass='page-link'
                activeClass='pageItemActive'
                activeLinkClass='pageLinkActive'
                // {...options}
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
