import React, { Component } from "react";
import { Link } from "react-router-dom";
class TournamentResult extends Component {
  state = {};
  render() {
    return (
      <div className="content-grid player-game-part">
      <div className="grid-column mt-4">
        <div className="top-content-part">
          <div className="row">
            <div className="col-md-4">
              <div className="team-detail pull-left">
                <div className="image-part ml-5">
                  <img src="/common/img/coach/school1.png" alt="User Image" />
                </div>
                <div className="detail-part">
                  <div className="team-name">
                    <h4>G D Goenda Public School</h4>
                    <p>Area Code-0512</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="visrespart text-center">
                <img src="/common/img/coach/vs_white.png" alt="VS" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-detail pull-right">
                <div className="image-part ml-3">
                  <img src="/common/img/coach/school2.png" alt="User Image" />
                </div>
                <div className="detail-part">
                  <div className="team-name">
                    <h4>National Public School</h4>
                    <p>Area Code-0519</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tournament-result-section">
          <div className="row">
            <div className="col-md-6 ">
              <div className="main-section">
            
            <div className="result-parts text-center">
              <h2>Winner</h2>
              <img src="/common/img/coach/winner.png" alt="Winner Image" />
              <h3>Player 1</h3>
              <h4>Earned- 500 Tokens</h4>
              
            </div>
          
            
          
            
            </div>
          
          
            </div>
           
            <div className="col-md-6 border-middle">
              <div className="main-section ">
              <div className="result-parts text-center">
              <h2>Runner Up</h2>
              <img src="/common/img/coach/winner.png" alt="Winner Image" />
              <h3>Player 2</h3>
              <h3>Lost- 300 Tokens</h3>
              
            </div>
            </div>
               
          
        </div>
      </div>
    </div>
   </div>
   </div>
    );
  }
}

export default TournamentResult;
