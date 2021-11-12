import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Fade from 'react-reveal/Fade';
import './home.css';

class Footer extends Component {
    
   

    
    
    render() {
       
        
    

     
        
        return (
            

          
<>
<section class="mosh-call-to-action-area bg-img bg-overlay section_padding_100" id="getstarted" style={{backgroundImage: "url(../common/img/bg-img/cta.jpg)"}}>
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
                        <div class="single-footer-widget mb-100 ml-5">
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
                        <div class="single-footer-widget mb-100 ml-2">
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
   


  
            
             
             </>
          
        );
    }
}

export default Footer;
