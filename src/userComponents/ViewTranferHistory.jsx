import React, { Component } from "react";
import { Link } from "react-router-dom";
class ViewTransferHistory extends Component {
  state = {};
  render() {
    return (
      <div className="content-grid">
          <div className="headingtitle toggledesign">
            <h3>Transaction History</h3>
          </div>
        <div className="tabsviewuserside " style={{borderRadius:"0px"}}>
          <ul>
            <li><Link  className="ft ct1">Date</Link></li>
           
            <li><Link className="ft ct1">Package Name</Link></li>
            <li><Link  className="ft ct1">Amount</Link></li>
           
           <li><Link className="ft ct1">Token</Link></li>
          </ul>
        </div>
        <div className="tabsviewuserside mt-4">
          <ul>
            <li><Link  className="ct">23/09/2021</Link></li>
           
            <li><Link  className="ct">Package 1</Link></li>
            <li><Link   className="ct">500 USD</Link></li>
           
           <li><Link  className="ct">1000</Link></li>
          </ul>
        </div>
        <div className="tabsviewuserside mt-4">
          <ul>
            <li><Link  className="ct">23/09/2021</Link></li>
           
            <li><Link  className="ct">Package 1</Link></li>
            <li><Link   className="ct">500 USD</Link></li>
           
           <li><Link  className="ct">1000</Link></li>
          </ul>
        </div>
        <div className="tabsviewuserside mt-4">
          <ul>
            <li><Link  className="ct">23/09/2021</Link></li>
           
            <li><Link  className="ct">Package 1</Link></li>
            <li><Link   className="ct">500 USD</Link></li>
           
           <li><Link  className="ct">1000</Link></li>
          </ul>
        </div>
        <div className="tabsviewuserside mt-4">
          <ul>
            <li><Link  className="ct">23/09/2021</Link></li>
           
            <li><Link  className="ct">Package 1</Link></li>
            <li><Link   className="ct">500 USD</Link></li>
           
           <li><Link  className="ct">1000</Link></li>
          </ul>
        </div>
        <div className="tabsviewuserside mt-4">
          <ul>
            <li><Link  className="ct">23/09/2021</Link></li>
           
            <li><Link  className="ct">Package 1</Link></li>
            <li><Link   className="ct">500 USD</Link></li>
           
           <li><Link  className="ct">1000</Link></li>
          </ul>
        </div>
        </div>
      
    );
  }
}

export default ViewTransferHistory;
