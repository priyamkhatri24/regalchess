import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
class GameRoomListing extends Component {
  state = {};
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
    console.log(this.state);
  }
  handleModalShowHide2() {
    this.setState({ showHide2: !this.state.showHide2 });
    console.log(this.state);
  }
  handleModalShowHide3() {
    this.setState({ showHide3: !this.state.showHide3 });
    console.log(this.state);
  }
  render() {
    return (
        <>
      <div className="content-grid">
        <div className="grid-column mt-4">
          <div className="headingtitle toggledesign">
            <h3>Available Rooms</h3>
          </div>
         
                <div className=" row mt-4">
                    <div className="col-md-6 justify-content-center">
                    <div className="earning-stat-box">
                        <div className="earning-stat-box-info">
                            
                            <div className="earning-stat-box-icon-wrap mt-4">
                              <img className=""  onClick={() => this.handleModalShowHide2()} src="../common/img/icons/1212.png"/>
                            </div>
                            <p className="earning-stat-box-title mt-4">Room Name</p>
                            <p className="earning-stat-box-text mtn-5">Prize : 100 Tokens</p>
                            <p className="earning-stat-box-text mtn-16">Entry Fee: 50 Tokens</p>
                            <p className="badge-item-preview-timestamp fs" style={{marginLeft:"151px", marginBottom:"-1px"}}>
                    <Link style={{borderRadius:"12px 0 12px 0"}} onClick={() => this.handleModalShowHide()}>Pay & Play</Link>
                  </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="earning-stat-box">
                        <div className="earning-stat-box-info">
                      
                        <div className="earning-stat-box-icon-wrap mt-4">
                              <img className="" src="../common/img/icons/1313.png"/>
                            </div>
                            <p className="earning-stat-box-title mt-4">Room Name</p>
                            <p className="earning-stat-box-text mtn-5">Prize : 100 Tokens</p>
                            <p className="earning-stat-box-text mtn-16">Entry Fee: 50 Tokens</p>
                            <p className="badge-item-preview-timestamp fs" style={{marginLeft:"151px", marginBottom:"-1px"}}>
                    <Link style={{borderRadius:"12px 0 12px 0"}} onClick={() => this.handleModalShowHide()}>Pay & Play</Link>
                  </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 mt-5">
                    <div className="earning-stat-box">
                        <div className="earning-stat-box-info">
                         
                           <div className="earning-stat-box-icon-wrap mt-4">
                              <img className="" src="../common/img/icons/1414.png"/>
                            </div>
                            <p className="earning-stat-box-title mt-4">Room Name</p>
                            <p className="earning-stat-box-text mtn-5">Prize : 100 Tokens</p>
                            <p className="earning-stat-box-text mtn-16">Entry Fee: 50 Tokens</p>
                            <p className="badge-item-preview-timestamp fs" style={{marginLeft:"151px", marginBottom:"-1px"}}>
                    <Link style={{borderRadius:"12px 0 12px 0"}} onClick={() => this.handleModalShowHide()}>Pay & Play</Link>
                  </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 mt-5">
                    <div className="earning-stat-box">
                        <div className="earning-stat-box-info">
                         
                        <div className="earning-stat-box-icon-wrap mt-4">
                              <img className="" src="../common/img/icons/1515.png"/>
                            </div>
                            <p className="earning-stat-box-title mt-4">Room Name</p>
                            <p className="earning-stat-box-text mtn-5">Prize : 100 Tokens</p>
                            <p className="earning-stat-box-text mtn-16">Entry Fee: 50 Tokens</p>
                            <p className="badge-item-preview-timestamp fs" style={{marginLeft:"151px", marginBottom:"-1px"}}>
                    <Link style={{borderRadius:"12px 0 12px 0"}} onClick={() => this.handleModalShowHide()}>Pay & Play</Link>
                  </p>
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
                          <h3 className="text-center">Game Details</h3>
                        </div>
<div className="container mt-4">
<div className="row ">
<div className="col-md-8 text-center m-auto">
<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. . Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
<img  className="token-img  "  style={{marginTop:"-20px", width:"60px"}} src="/common/img/coach/token.png" alt="School Logo" />
<div className="heading-part">
                          <h3 className="text-center mt-1">Pay 500 Token</h3>
                        </div>
                       
            
                              <div className=" m-auto">
                            <button className="button medium secondary mt-4 mb-4"><Link  onClick={() => this.handleModalShowHide3()} style={{color:"white"}}>Pay & Play</Link></button>
                            </div>
                    </div>
                    </div>
    
                    </div>
                    </div>
    
  
  </div>
</Modal.Body>
</Modal>

<Modal show={this.state.showHide2} className="gameroom-modall">
<Modal.Body style={{backgroundImage: "url(../common/img/bg-img/gettokens.png)", height:"430px", width:"700px", margin:"auto", backgroundPosition:"cover", backgroundRepeat:
"no-repeat" }} >
  <div className="main-section">
    <Link
      className="close-icon"
      onClick={() => this.handleModalShowHide2()}
    >
      <i className="fa fa-times"></i>
    </Link>

    
 <button className="done medium secondary"><Link to="/user/achievements"style={{color:"white"}}>Get Tokens</Link></button>

        

  
  </div>
  
</Modal.Body>
</Modal>
<Modal show={this.state.showHide3} className="gameroom-modall">
<Modal.Body   style={{backgroundImage: "url(../common/img/bg-img/match.png)", height:"430px", width:"700px", margin:"auto", backgroundPosition:"cover", backgroundRepeat:
"no-repeat" }} >
  <div className="main-section">
    <Link
      className="close-icon"
      onClick={() => this.handleModalShowHide3()}
    >
      <i className="fa fa-times"></i>
    </Link>

    

   
    
    
  
    <button className="done medium secondary"><Link to="/user/botgame"style={{color:"white"}}>Continue</Link></button>
  
 
  
 
        

  
  </div>
  
</Modal.Body>
</Modal>


</>
    );
  }
}

export default GameRoomListing;
