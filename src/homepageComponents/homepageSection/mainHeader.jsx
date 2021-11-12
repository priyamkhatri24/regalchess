import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Fade from 'react-reveal/Fade';
import { Link as Link1 } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';

import './home.css';

class MainHeader extends Component {
    
   

    state = {
        nav: 0
    }
    
    

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
    this.setState({nav: window.scrollY})
      

      };
   
   
    
    render() {
        console.log(window.scrollY)
        
    

     
        
        return (
            
          
<>
    <header className="header_area clearfix">
        <div className="container-fluid-header">
            <div className="row">
            
                <div className="col-12">
                    <div className="menu_area">
                
                        <nav  id="main-navigation"  className={this.state.nav < 20 ? "navbar  navbar-expand-lg align-items-center" : "navbar scroll navbar-expand-lg align-items-center"}>
                        
                            <Link2 className="navbar-brand" to="/"><img src="../common/img/landing/logo_white.png"   style={{marginLeft:"40px", width:"75px"}}  alt="logo"/></Link2>               
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mosh-navbar" aria-controls="mosh-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                            <div className="collapse navbar-collapse justify-content-end" id="mosh-navbar">
                                <ul className="navbar-nav animated" id="nav">
                                    <li className="nav-item active"><Link1 className="nav-link" smooth={true} to="/">Home</Link1></li>
                                    <li className="nav-item"><Link1 className="nav-link" smooth={true} offset={-150} duration={500} to="about">About Us</Link1></li>
                                    <li className="nav-item"><Link1 className="nav-link" smooth={true} offset={-210} duration={500} to="gameroom">Game Room</Link1></li>
                                    <li className="nav-item"><Link1 className="nav-link" smooth={true} offset={-150} duration={500} to="tournament">Tournament</Link1></li>
                                    <li className="nav-item"><Link1 className="nav-link"  to="refer" smooth={true} offset={-190} duration={500}>Refer & Earn</Link1></li>
                                    <li className="nav-item"><Link1 className="nav-link" smooth={true} offset={-98} duration={500} to="tokens">Tokens</Link1></li>
                                   
                                    <li className="nav-item"><Link1 className="nav-link" smooth={true} offset={-98} duration={500} to="getstarted">Get Started</Link1></li>
                                  <div className="middlee ml-4 "></div>
                                    
                                   
                                </ul>
                            
                                <div className=" ml-1 " >
                                    <Link2 to="/user/register"><button className="login-btn">Login</button></Link2>
                                </div>
                                
                                    <div className=" mosh-btn1 " >
                                    <Link2 to="/user/register"><button>Sign Up</button></Link2>
                                </div>
                            </div>

                        </nav>
                
    
                    </div>
                </div>
            </div>
        </div>
    </header>

   
    <section class="welcome_area clearfix" id="home" style={{backgroundImage: "url(../common/img/bg-img/welcome-bg.png)",zIndex:"1",}}>
   
    </section>
    <div className="row">
		<div className="col-xs-6">
        <div className='hero-container'>
        <h4>Welcome to</h4>
      <h1>REGALCHESS</h1>
      <p>The next generation social network & community! Connect with your friends and play with our quests and badges gamification system!</p>
      <div className="d-flex slider-btn justify-content-between">
         
      <div  className="">
          
  <button className="mosh-btn-slider2">Get Started</button>
      </div>
      </div>
</div>
		</div>

		<div className="col-xs-6 side-img" >  
        <Fade right duration={2000}>
        <img src="../common/img/bg-img/side.png" style={{position:"absolute", top:"0", zIndex:"1"}}/>
        </Fade>
			
		</div>
       
	</div>
  
            
             
             </>
          
        );
    }
}

export default MainHeader;
