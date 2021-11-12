import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Fade from 'react-reveal/Fade';
import './home.css';
import MainHeader from './mainHeader';
import DetailSection from './detailSection';
import ReferSection from './referSection';
import TokenSection from './tokenSection';
import Footer from './footer';
class LandingSection extends Component {
    state = {}
    
    render() {
        return (
            <div className="homepage">

                <div className="container-fluidd ">
    
    <MainHeader/>
    <DetailSection/>
    <ReferSection/>
    <TokenSection/>
    <Footer/>

               
          </div>
          </div>
        );
    }
}

export default LandingSection;
