import React from "react";
import { NavLink } from "react-router-dom";

const Commom = (props) => {
    return (
        <>
        <div id="header" className="d-flex align-item-center">
        <div className="container-fluid ">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">

                    
                    <div className="col-md-6 lg-0 lg-1 d-flex justify-content-center flex-column">
                        <h1>
                            {props.name}
                            <strong className="brand-name"> Sample</strong>
                        </h1>
                        <h2 className="my-3">
                            We are seeing this page.        
                        </h2>
                        <div className="mr-3">
                            <NavLink to={props.visit} className="btn-get-started">
                                {props.btname}
                            </NavLink>
                        </div>
                    </div>

                    <div className="col-lg-6 lg-2 header-img">
                        <img src={props.imgsrc} className="img-fluid animated" alt="home-img" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Commom;