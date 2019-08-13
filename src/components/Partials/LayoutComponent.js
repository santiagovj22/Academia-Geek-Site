import React from 'react';

import NavBar from '../Partials/NavBarComponent';
import Footer from '../Partials/FooterComponent';
import Updates from '../UpdatesComponent/UpdatesComponent';
import HomeComponent from '../Home/HomeComponent';
import About from '../AboutMeComponent/AboutMeComponent';
const Layout = (props) => {
    return(

        <div> 
             <NavBar/>
             {props.children}

             <HomeComponent/>
             <br/>
             <About/>
             <Updates/>

            <Footer/>
        </div>
    )
    
}
export default Layout;