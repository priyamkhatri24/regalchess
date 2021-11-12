import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
class UserAchievements extends Component {
  state = {};
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
    console.log(this.state);
  }

  handleModalShowHide2() {
    this.setState({ showHide2: !this.state.showHide2 });
    console.log(this.state);
  }
  render() {
    return (
      <>
      <div className="content-grid">
        <div className="grid-column mt-4">
          <div className="headingtitle toggledesign">
            <h3>Tokens</h3>
          </div>
            {/* <div className="widget-box customwidget-box user-achievments">
            <h3 className="m-auto text-center">My Tokens</h3>
            <p className="user-short-description-title text-center">100000  Tokens</p>
            
          
                
              </div> */}


            <div className="grid-column mt-4">
          
          <div className="upcomming-tournamnet">
          
          {/* <div className="user-preview landscape mt-0">
          <h3> My Tokens</h3>
            </div> */}
            <div className="user-preview landscape">
              <div className="user-preview-info">
              
               
                  <p className="user-short-description-title ml-5 mt-3 ct">Package 1</p>
                
             
         
                  <p className="user-short-description-title text-right mt-3 ct">100000  Tokens</p>
                 
                  <img  className="token-img" src="/common/img/coach/token.png" alt="School Logo" />
                <div className="user-stats">

                  
                
                  <div className="">
                    <p className="user-stat-title mr-5 mb-3 ct" style={{fontSize:"20px"}}>= </p>
                  
                  </div>
                  <div className="" >
                    <p className="user-stat-title mt-2 ct">100 USD</p>
                  
                  </div>
                </div>
                <div className="user-preview-actions">
                  <div className="achievment-link">
                    <Link onClick={() => this.handleModalShowHide()}>Buy</Link>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="user-preview landscape">
              <div className="user-preview-info">
              
               
                  <p className="user-short-description-title ml-5 mt-3 ct">Package 2</p>
                
             
         
                  <p className="user-short-description-title text-right mt-3 ct">150000  Tokens</p>
                 
                  <img  className="token-img" src="/common/img/coach/token.png" alt="School Logo" />
                <div className="user-stats">

                  
                
                  <div className="">
                    <p className="user-stat-title mr-5 mb-3 ct" style={{fontSize:"20px"}}>= </p>
                  
                  </div>
                  <div className="" >
                    <p className="user-stat-title mt-2 ct">200 USD</p>
                  
                  </div>
                </div>
                <div className="user-preview-actions">
                  <div className="achievment-link">
                    <Link onClick={() => this.handleModalShowHide()}>Buy</Link>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="user-preview landscape">
              <div className="user-preview-info">
              
               
                  <p className="user-short-description-title ct ml-5 mt-3">Package 3</p>
                
             
         
                  <p className="user-short-description-title ct text-right mt-3">200000  Tokens</p>
                 
                  <img  className="token-img" src="/common/img/coach/token.png" alt="School Logo" />
                <div className="user-stats">

                  
                
                  <div className="">
                    <p className="user-stat-title mr-5 mb-3 ct" style={{fontSize:"20px"}}>= </p>
                  
                  </div>
                  <div className="" >
                    <p className="user-stat-title mt-2 ct">300 USD</p>
                  
                  </div>
                </div>
                <div className="user-preview-actions">
                  <div className="achievment-link">
                    <Link onClick={() => this.handleModalShowHide()}>Buy</Link>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="user-preview landscape">
              <div className="user-preview-info">
              
               
                  <p className="user-short-description-title ml-5 mt-3 ct">Package 4</p>
                
             
         
                  <p className="user-short-description-title text-right mt-3 ct">300000  Tokens</p>
                 
                  <img  className="token-img" src="/common/img/coach/token.png" alt="School Logo" />
                <div className="user-stats">

                  
                
                  <div className="">
                    <p className="user-stat-title mr-5 mb-3 ct" style={{fontSize:"20px"}}>= </p>
                  
                  </div>
                  <div className="" >
                    <p className="user-stat-title mt-2 ct">400 USD</p>
                  
                  </div>
                </div>
                <div className="user-preview-actions">
                  <div className="achievment-link">
                    <Link onClick={() => this.handleModalShowHide()}>Buy</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 mb-4">
                              <div className="col-4 m-auto">
                            <button className="button medium secondary"><Link to="/user/view-history" style={{color:"white"}}>View  transaction history </Link></button>
                            </div>
                            </div>
           
            </div>
          </div>
        </div>
      
                
                    
                   
                  
                  
                  
              
              
                      
              
            
          </div>
      
      <Modal show={this.state.showHide} className="gameroom-modal">
<Modal.Body>
  <div className="main-section">
    <Link
      className="close-icon"
      onClick={() => this.handleModalShowHide()}
    >
      <i className="fa fa-times"></i>
    </Link>
    <div className="play-with">
                        <div className="heading-part">
                          <h3 className="text-center">Selected Plan</h3>
                        </div>
<div className="container mt-4">
<div className="row ">
<div className="col-md-8 text-center m-auto">
  
                        <div className="row   token-modal">
                          {/* <div className="col-md-4">
                          <p className="badge-item-preview-title ct">100 Tokens</p>
                          </div>
                          <div className="col-md-3">
                           
                  <img  className="token-img "  style={{marginTop:"-20px"}} src="/common/img/coach/token.png" alt="School Logo" />
                          </div>
                          <div className="col-md-2">
                          <p className="user-stat-title ct" style={{fontSize:"24px", marginTop:"-10px"}}>= </p>
                          </div>
                          <div className="col-md-3">
                          <p className="badge-item-preview-title ct" >100 USD</p>
                          </div> */}

                          </div>
                       
                    <hr/>
                    <p className="text-center">By registering you agree to our Terms & Conditions of
RegalChess game lorem Ipsum. </p>
            
                              <div className=" m-auto">
                            <button className="button medium secondary mt-2 mb-4"><Link onClick={() => this.handleModalShowHide2()} style={{color:"white"}}>Pay Now </Link></button>
                            </div>
                          
                    </div>
                    </div>
     
                    </div>
                    </div>
    
  
  </div>
</Modal.Body>
</Modal>

<Modal show={this.state.showHide2} className="gameroom-modall">
<Modal.Body style={{backgroundImage: "url(../common/img/bg-img/payment.png)", height:"430px", width:"700px", margin:"auto", backgroundPosition:"cover", backgroundRepeat:
"no-repeat" }} >
  <div className="main-section">
    <Link
      className="close-icon"
      onClick={() => this.handleModalShowHide2()}
    >
      <i className="fa fa-times"></i>
    </Link>

    
 <button className="done medium secondary"><Link style={{color:"white"}}>Done</Link></button>

        

  
  </div>
  
</Modal.Body>
</Modal>
</>

    );
  }
}

export default UserAchievements;
