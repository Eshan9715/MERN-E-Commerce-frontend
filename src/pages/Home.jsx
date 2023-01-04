import React from "react";
import Announcement from "../components/Announcement";
import Brands from "../components/Brands";
import Categories from "../components/Categories";
import Clothes from "../components/Clothes";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
//import Newsletter from "../components/Newsletter";
import { popularProducts } from "../data";

import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div style={{marginTop:15}}>
        <Slider />
        <Brands/>
        <Categories />
        <Clothes title={"New arrivals"} datas={popularProducts} x={"New"}/>
        <Clothes title={"Seasonal sales"} datas={popularProducts} x={"30% off"}/>

        <Clothes title={"Mens' Collection"} datas={popularProducts}  x={""}/>
        <Clothes title={"Womens' Collection"} datas={popularProducts} x={""}/>
        <Clothes title={"Kids' Collection"} datas={popularProducts}  x={""}/>

        <Products/>
        {/* <Newsletter/> */}
        <Footer/>
      </div>
      
    </div>
  );
};

export default Home;
