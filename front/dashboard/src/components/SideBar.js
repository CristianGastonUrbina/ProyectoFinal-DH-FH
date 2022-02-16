import React from 'react';
import image from '../assets/images/logo.svg';
import {Link,Route, Routes} from "react-router-dom"
import ContentWrapper from "./ContentWrapper"
import Login from "./Login"
import Register from "./Register"
import Shop from "./Shop"
import Error404 from "./Error404"



function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-info sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="logo"/>
                    </div></a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">              
                        <i className="fas fa-bold fa-computer"></i>
                        <span>Dashboard</span>
                        </a>
                </li>
                
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="http://localhost:3001/">
                    <i className="fas fa-comerce fa-user"></i>
                        <span>e-Comerce</span></a>                    
                </li>

 
         
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            <Routes>
                <Route exact path="/" element={<ContentWrapper />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/shop" element={<Shop />} />
                <Route exact path="*" element={<Error404 />} />            

            </Routes>


 

        </React.Fragment>
    )
}
export default SideBar;