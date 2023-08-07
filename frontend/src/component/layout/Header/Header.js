import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { FaUserAlt, FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
      logo='https://www.lunapic.com/editor/premade/transparent.gif'
      burgerColor='crimson'
      navColor1='#fff5f5'
      burgerColorHover='#900'
      logoWidth='75%'
      logoHoverColor='crimson'
      link1Size='1.2rem'
      link1Color='#121212'
      link1Padding='1vmax'
      link1ColorHover='crimson'
      nav2justifyContent='flex-end'
      link1Margin='1vmax'
      link2Margin='0'
      link3Margin='0'
      link4Margin='1vmax'
      nav3justifyContent='flex-start'
      link1Text='Home'
      link1Family='sans-serif'
      link2Text='Products'
      link3Text='Contact Us'
      link4Text='About Us'
      nav4justifyContent='flex-start'
      searchIconMargin='1vmax'
      cartIconMargin='1vmax'
      link1Url='/'
      link2Url='/products'
      link3Url='/contact'
      link4Url='/about'
      profileIconMargin='1vmax'
      searchIconColor='rgba(35,35,35,0.8)'
      cartIconColor='rgba(35,35,35,0.8)'
      profileIconColor='rgba(35,35,35,0.8)'
      searchIconColorHover='crimson'
      cartIconColorHover='crimson'
      profileIconColorHover='crimson'
      profileIcon={true}
      searchIcon={true}
      cartIcon={true}
      ProfileIconElement={FaUserAlt}
      SearchIconElement={FaSearch}
      CartIconElement={FaShoppingCart}
      profileIconUrl='/login'
    />
  );
};

export default Header;
