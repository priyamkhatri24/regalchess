import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Fade from 'react-reveal/Fade';
import './home.css';

class TokenSection extends Component {
    
   

  
    
    
    render() {
       
        
    

     
        
        return (
            

          
<>
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
        <Fade left delay={500} duration={2000}>
            <img  className="token-bg"  src="../common/img/bg-img/token.png" alt=""/>
            </Fade>
        
           
        </div>
        </div>
        </div>
       
        
    </section>
  
            
             
             </>
          
        );
    }
}

export default TokenSection;
