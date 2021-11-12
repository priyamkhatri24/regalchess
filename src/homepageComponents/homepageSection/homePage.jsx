import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Fade from 'react-reveal/Fade';
import './home.css';

class HomePage extends Component {
    
   

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
            
            <div className="homepage">
    
    {/* <div id="preloader">
        <div class="mosh-preloader"></div>
    </div> */}

    <header className="header_area clearfix">
        <div className="container-fluid-header">
            <div className="row">
            
                <div className="col-12">
                    <div className="menu_area">
                
                        <nav  id="main-navigation"  className={this.state.nav < 20 ? "navbar  navbar-expand-lg align-items-center" : "navbar scroll navbar-expand-lg align-items-center"}>
                        
                            <Link className="navbar-brand" href="index.html"><img src="../common/img/landing/logo_white.png"   style={{marginLeft:"40px", width:"75px"}}  alt="logo"/></Link>               
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mosh-navbar" aria-controls="mosh-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                            <div className="collapse navbar-collapse justify-content-end" id="mosh-navbar">
                                <ul className="navbar-nav animated" id="nav">
                                    <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#gameroom">Game Room</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#tournament">Tournament</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#tokens">Tokens</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#refer">Refer & Earn</a></li>
                                    <li className="nav-item"><Link className="nav-link" to="/user/register">Get Started</Link></li>
                                  <div className="middlee ml-4 mr-1"></div>
                                    
                                    <li className="nav-item"><Link className="nav-link" to="/user/login">Login</Link></li>
                                </ul>
                            
                               
                            
                                
                                    <div className=" mosh-btn1 " >
                                    <Link to="/user/register"><button>Sign Up</button></Link>
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
          <div>
      <button className="mosh-btn-slider">Learn More</button>
      </div>
      <div  className="ml-3">
          
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
   ""
    <section class="mosh-service-area clearfix" id="about">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="mosh-service-slides owl-carousel">
                        
            
  <section class="features">
    <section class="feature-pair">
      <article class="feature feature--image">
   
        <img className="bg-img" src="../common/img/bg-img/chess-bg (1).png" alt="Feature Screenshot" width="549" height="336" />
        <img className="layer-img" src="../common/img/bg-img/chess-1.png" alt="Feature Screenshot" width="549" height="336" />
    
      </article>

      <article class="feature feature--text" style={{marginTop:"-100px"}}>
  
          <div className="d-flex">
        
         <i class="fas fa-users fa-flip mr-3"></i> 
        <h4>About Us</h4>
        </div>
        <p class="features-content-2">Creating tracking links shouldn't be difficult, practice presets to get you started on the right foot. And they're removable if you decide to do things differently. Get it right the so we've streamlined the entire process. Whenever you create a link, we save the data so it's at your fingertips next time you need it. No more wondering whether you usually use facebook.com or facebook.</p>
    
        <div>
            
      <button class="mosh-btn-features mt-2" >Learn More</button>
      </div>
      </article>
    </section>
    <section class="feature-pair" id="gameroom">
      <article class="feature feature--image">
        <img className="bg-img" src="../common/img/bg-img/chess-bg (1).png" alt="Feature Screenshot" width="549" height="336" />
        <img className="layer-img2" src="../common/img/bg-img/chess-2.png" alt="Feature Screenshot" width="549" height="336" />
      
      </article>
      <article class="feature feature--text"  style={{marginTop:"-100px"}}>
  
      <div className="d-flex">
      
      <i class="fas fa-chess-knight fa-flip mr-3"></i>
        <h4>Game Room
</h4>
</div>
        <p class="features-content-2">If you don't already have a naming convention, we include bestpractice presets to get you started on the right foot. And they're removable if you decide to do things differently. Get it right the -practice presets to get you started on the right foot. And they're removable if you decide to do things differently. Get it right the first&nbsp;time, every&nbsp;time.</p>
   
        <div>
      <button class="mosh-btn-features mt-2">Learn More</button>
      </div>
      </article>
    </section>
    <section class="feature-pair" id="tournament" style={{marginLeft:"-20px"}}>
      <article class="feature feature--image" >
        <img className="bg-img" src="../common/img/bg-img/chess-bg (1).png" alt="Feature Screenshot" width="549" height="336" />
        <img className="layer-img3" src="../common/img/bg-img/chess-3.png" alt="Feature Screenshot" width="549" height="336" />
      </article>
      <article class="feature feature--text"  style={{marginTop:"-100px"}}>
   
            <div className="d-flex">
      <div className="fa-3x">
      <i className="fas fa-trophy fa-flip mr-3"></i>
            </div>
        <h4>Tournaments
</h4>
</div>
        <p class="features-content-2">If you don't already have a naming convention, we include best-practice presets to get you started on the right foot. And they're removable if you decide to do things differently. Get it right the practice presets to get you started on the right foot. And they're removable if you decide to do things differently. Get it right the first&nbsp;time, every&nbsp;time.</p>
   
        <div>
      <button class="mosh-btn-features mt-2">Learn More</button>
      </div>
      </article>
    </section>
  
  
    
   
   
  </section>
                   
                        
                     </div>
                </div>
                
             
               
        
            </div>
        </div>
    </section>
   
    <section class="mosh-features-area section_padding_100 clearfix" id="refer">
        <div class="container">
            <div class="row justify-content-left">
                <div class="col-12 col-md-6">
                    <div class="section-heading">
                    
                        <h2>Refer Friends and Get Reward</h2>
                    </div>
                    <div class="features-content">
                        <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec odio vestibulum est mattis effic iturut magna. Pellente sque sita met tellus blandit. Etiam nec odio.</p>
                       <button className="mosh-btn mt-2" style={{width:"100px"}}>Invite</button>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-end">
                <div class="col-12 col-md-6">
        <div class="features-img">
        <Fade top delay={2000} duration={2000}>
            <img src="../common/img/bg-img/Refer 3.png" alt=""/>
            </Fade>
            <Fade right duration={2000}>
            <img className="refer2" src="../common/img/bg-img/Refer 2.png" alt=""/>
            </Fade>
        </div>
        </div>
        </div>
       
    </section>
  
    
   
    <section class="token-area" id="tokens">
    <div class="container">
            <div class="row justify-content-end">
                <div class="col-12 col-md-6">
                    <div class="token-heading ">
                    
                        <h2>Tokens</h2>
                    </div>
                    <div class="features-content ">
                        <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec odio vestibulum est mattis effic iturut magna. Pellente sque sita met tellus blandit. Etiam nec odio.</p>
                       <button className="mosh-btn mt-2" style={{width:"100px", border:"none"}}>Learn More</button>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-left">
                <div class="col-12 col-md-6">
        <div class="features-img">
        <Fade left delay={2000} duration={2000}>
            <img  className="token-bg"  src="../common/img/bg-img/token.png" alt=""/>
            </Fade>
        
           
        </div>
        </div>
        </div>
       
        
    </section>
   
    <section class="mosh-call-to-action-area bg-img bg-overlay section_padding_100" style={{backgroundImage: "url(../common/img/bg-img/cta.jpg)"}}>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="cta-content text-center wow fadeIn" data-wow-delay="0.5s">
                        <div class="section-heading">
                            <p>Give us a shout</p>
                            <h2>Are you Ready to Join Us?</h2>
                            <Link href="contact.html" class="btn mosh-btn">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <footer class="footer-area clearfix">
       
        <div class="top-footer-area section_padding_100_0">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-100">
                            <a href="#" class="mb-50 d-block"><img src="../common/img/landing/logo_white.png" alt="" style={{width:"75px"}}/></a>
                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellent esque sit amet tellus blandit. Etiam nec odio vestibul.</p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-100">
                            <h5>Fast links</h5>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Game Room</a></li>
                                <li><a href="#">Tournaments</a></li>
                                <li><a href="#">Refer and Earn</a></li>
                                <li><a href="#">Get Started</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-100">
                            <h5>Tournaments</h5>
                            <div class="footer-single--blog-post">
                                <a href="#" class="blog-post-date">
                                    <p>23 September, 2017</p>
                                </a>
                                <a href="#" class="blog-post-title">
                                    <h6>Why we love stock photos</h6>
                                </a>
                            </div>
                            <div class="footer-single--blog-post">
                                <a href="#" class="blog-post-date">
                                    <p>22 September, 2017</p>
                                </a>
                                <a href="#" class="blog-post-title">
                                    <h6>Designin on grid. A few rules. </h6>
                                </a>
                            </div>
                            <div class="footer-single--blog-post">
                                <a href="#" class="blog-post-date">
                                    <p>20 September, 2017</p>
                                </a>
                                <a href="#" class="blog-post-title">
                                    <h6>2017 World Design Congress</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-100">
                            <h5>Contact Info</h5>
                            <div class="footer-single-contact-info d-flex">
                                <div class="contact-icon">
                                    <img src="../common/img/core-img/map.png" alt=""/>
                                </div>
                                <p>4127/ 5B-C Mislane Road, Gibraltar, UK</p>
                            </div>
                            <div class="footer-single-contact-info d-flex">
                                <div class="contact-icon">
                                    <img src="../common/img/core-img/call.png" alt=""/>
                                </div>
                                <p>Main: 203-808-8613 <br/> Office: 203-808-8648</p>
                            </div>
                            <div class="footer-single-contact-info d-flex">
                                <div class="contact-icon">
                                    <img src="../common/img/core-img/message.png" alt=""/>
                                </div>
                                <p>office@yourbusiness.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div class="footer-bottom-area">
            <div class="container h-100">
                <div class="row h-100">
                    <div class="col-12 h-100">
                        <div class="footer-bottom-content h-100 d-md-flex justify-content-between align-items-center">
                            <div class="copyright-text">
                                <p>
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |  <i class="fa fa-heart-o" aria-hidden="true"></i> <a href="https://colorlib.com" target="_blank"></a>

</p>
                            </div>
                            <div class="footer-social-info">
                                <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   


            
             </div>
          
        );
    }
}

export default HomePage;
