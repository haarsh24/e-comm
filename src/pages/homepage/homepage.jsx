import React from "react";
import { FeaturedProducts } from "../../components/featuredProducts/featuredProducts";
import { Footer } from "../../components/footer/footer";
import { HeroSection } from "../../components/heroSection/heroSection";
import { Navbar } from "../../components/navbar/navbar";
import { ProductByCategory } from "../../components/productByCategory/productByCategory";
import "../../components/styles/main.css";
import {Carousel} from "../../components/Carasoul/caraosel"
import { ProductsList } from "../products-list/products-list";


const Homepage =(props)=>{
    const {products}=props;
    console.log(products); 
    return(
        <>
  
  
  
    <HeroSection/>
    
    <ProductByCategory/>
    <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_JYJRZBnGQvmc3c" async> </script> </form>
    <Footer/>
        </>
    )
}

export {Homepage};