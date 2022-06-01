import React from "react";
import web from "../src/images/img2.png";
import Commom from "./Commom";

const Home = () => {
    return (
        <>
        <Commom 
        name="Welcome to Home page" 
        imgsrc={web} 
        visit="/service" 
        btname="Get Started"
        />
        </>
    );
};

export default Home;