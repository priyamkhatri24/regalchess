import React, { Component } from "react";
import { Link } from "react-router-dom";


class RightBar extends Component {
//   state = {
//     toggleWhite: 0,
//     toggleBlack: 0,
//     toggle5Minute: 0,
//     toggle10Minute: 0,
//     toggle15Minute: 0,
//     toggleUnlimited: 0,
//     showHide: false,
//     modalFriend: null,
//   };
//   constructor() {
//     super();
//     this.state.chatBar = false;
//   }
//     toggle5Minute = async () => {
//     let temp = this.state.toggle5Minute;
//     temp === 0 ? (temp = 1) : (temp = 0);
//     await this.setState({
//       toggle5Minute: temp,
//       toggle10Minute: 0,
//       toggle15Minute: 0,
//       toggleUnlimited: 0,
//     });
//   };
//   toggle10Minute = async () => {
//     let temp = this.state.toggle10Minute;
//     temp === 0 ? (temp = 1) : (temp = 0);
//     await this.setState({
//       toggle5Minute: 0,
//       toggle10Minute: temp,
//       toggle15Minute: 0,
//       toggleUnlimited: 0,
//     });
//   };

//   toggle15Minute = async () => {
//     let temp = this.state.toggle15Minute;
//     temp === 0 ? (temp = 1) : (temp = 0);
//     await this.setState({
//       toggle5Minute: 0,
//       toggle10Minute: 0,
//       toggle15Minute: temp,
//       toggleUnlimited: 0,
//     });
//   };
//   toggleUnlimited = async () => {
//     let temp = this.state.toggleUnlimited;
//     temp === 0 ? (temp = 1) : (temp = 0);
//     await this.setState({
//       toggle5Minute: 0,
//       toggle10Minute: 0,
//       toggle15Minute: 0,
//       toggleUnlimited: temp,
//     });
//   };
//   toggleWhite = async () => {
//     let temp = this.state.toggleWhite;
//     temp === 0 ? (temp = 1) : (temp = 0);
//     await this.setState({
//       toggleWhite: temp,
//       toggleBlack: 0,
//     });
//   };
//   toggleBlack = async () => {
//     let temp = this.state.toggleBlack;
//     temp === 0 ? (temp = 1) : (temp = 0);
//     await this.setState({
//       toggleBlack: temp,
//       toggleWhite: 0,
//     });
//   };
//   toggleChatBar = () => {
//     this.setState({ chatBar: !this.state.chatBar });
//   };

//   handleModalShowHide = async (friend) => {
//     this.setState({
//       modalFriend: friend,
//       showHide: !this.state.showHide,
//     });
//   };

//   handleNo = async () => {
//     this.setState({
//       modalFriend: {},
//       showHide: !this.state.showHide,
//     });
//   };

//   handleYes = async () => {
//     this.setState({
//       showHide: !this.state.showHide,
//     });
//     this.props.sendGameRequestToFriend(this.state.modalFriend);
//   };
//   componentDidMount = async () => {};
//   displayFriendWidgets = () => {
//     const { friendList } = this.props;

//     return friendList.map((friend) => {
//       return (
//         <RightChatBarFriendWidget
//           key={friend.friendId._id}
//           friend={friend}
//           handleModalShowHide={() => this.handleModalShowHide(friend)}
//         />
//       );
//     });
//   };
  render() {
    return (
      <aside
        id="chat-widget-messages"
        className="chat-widget sidebar right"

      >
        <div className="side-bar-1 user-short-description mt-3">
        <h6 className="user-short-description-title fsss" >Upcoming Tournaments</h6>
          </div>
          <div className="side-bar mt-3">
            <div className="side-title">
           <div className="d-flex justify-content-between user-short-description " style={{marginTop:"-50px"}}>  
            <h6 className="user-short-description-title fsss" >League of legends</h6>
             <p className="Live-title">Live</p></div>
              <p className="side-title-2">Group stage-Matchday 1 of 5</p>
              </div>
              
              <div className="row ml-1">
               
              <div className="col-4">
                <img
                    src="/common/img/icons/img1.png"
                    alt="User Icon"
                    style={{width:"36px"}}
                   
                    
                  />

                </div>
                <div className="col-4 ">
                <img
                    src="/common/img/icons/vs.png"
                    alt="User Icon"
                    style={{width:"22px"}}
                   
                    
                  />

                </div>
                <div className="col-4">
                <img
                    src="/common/img/icons/img6.png"
                    alt="User Icon"
                    style={{width:"36px"}}
                   
                    
                  />

                </div>

              </div>
              <div className="d-flex  mt-2">
              <h6   className="fs ml-3">Alex Smith</h6>
              <h6   className="fs " style={{marginLeft:"85px"}}>Ira Hanny</h6>
                
              </div>

             
<div className="d-flex mt-3"> 
                <p className="badge-item-preview-timestamp-1 fs mr-4 " >
                    <Link to="profile">Play Now</Link>
                  </p><p className="badge-item-preview-timestamp-1 fs">
                    <Link to="profile">Skip</Link>
                  </p>
                  </div>
        



            </div>
     
        
        
        <div>
          
         
        </div>
        <div className="side-bar-2 mt-3">
            <div className="side-title">
           <div className="d-flex justify-content-between user-short-description" style={{marginTop:"-50px"}}>   
           <h6 className="user-short-description-title fsss " >Next Match</h6>
           <p className="side-title-2 mt-1 mr-1 mtn">Today <i class="fa fa-angle-down ml-1"></i> </p>
             </div>
<div className="col-12">
             <div className="row mtn">
               <div className="d-flex">
               <div className="col-3">
               <p className="fss">10:45 </p>
               </div>
               <div className="col-3">
                <img
                    src="/common/img/icons/img2.png"
                    alt="User Icon"
                    style={{width:"23px"}}
                   
                    
                  />
               </div>
               <div className="col-3">
               <p className="fss">VS </p>
               </div>
               <div className="col-3">
                <img
                    src="/common/img/icons/img5.png"
                    alt="User Icon"
                    style={{width:"23px"}}
                   
                    
                  />
               </div>
               </div>
            
              </div>
              
             <div className="row mtn">
               <div className="d-flex">
               <div className="col-3">
               <p className="fss">10:45 </p>
               </div>
               <div className="col-3">
                <img
                    src="/common/img/icons/img3.png"
                    alt="User Icon"
                    style={{width:"23px"}}
                   
                    
                  />
               </div>
               <div className="col-3">
               <p className="fss">VS </p>
               </div>
               <div className="col-3">
                <img
                    src="/common/img/icons/img4.png"
                    alt="User Icon"
                    style={{width:"23px"}}
                   
                    
                  />
               </div>
               </div>
            
              </div>
              
             <div className="row mtn">
               <div className="d-flex">
               <div className="col-3">
               <p className="fss">10:45 </p>
               </div>
               <div className="col-3">
                <img
                    src="/common/img/icons/img1.png"
                    alt="User Icon"
                    style={{width:"23px"}}
                   
                    
                  />
               </div>
               <div className="col-3">
               <p className="fss">VS </p>
               </div>
               <div className="col-3">
                <img
                    src="/common/img/icons/img6.png"
                    alt="User Icon"
                    style={{width:"23px"}}
                   
                    
                  />
               </div>
               </div>
            
              </div>
              
             <div className="row mtn">
               <div className="d-flex">
               <div className="col-3">
               <p className="fss">10:45 </p>
               </div>
               <div className="col-3">
                <img
                    src="/common/img/icons/img2.png"
                    alt="User Icon"
                    style={{width:"23px"}}
                   
                    
                  />
               </div>
               <div className="col-3">
               <p className="fss">VS </p>
               </div>
               <div className="col-3">
                <img
                    src="/common/img/icons/img5.png"
                    alt="User Icon"
                    style={{width:"23px"}}
                   
                    
                  />
               </div>
               </div>
            
              </div>
              
             <div className="row mtn">
               <div className="d-flex">
               <div className="col-3">
               <p className="fss">10:45 </p>
               </div>
               <div className="col-3">
                <img
                    src="/common/img/icons/img3.png"
                    alt="User Icon"
                    style={{width:"23px"}}
                   
                    
                  />
               </div>
               <div className="col-3">
               <p className="fss">VS </p>
               </div>
               <div className="col-3">
                <img
                    src="/common/img/icons/img4.png"
                    alt="User Icon"
                    style={{width:"23px"}}
                   
                    
                  />
               </div>
               </div>
            
              </div>
              
             <div className="row mtn">
               <div className="d-flex">
               <div className="col-3">
               <p className="fss">10:45 </p>
               </div>
               <div className="col-3">
                <img
                    src="/common/img/icons/img1.png"
                    alt="User Icon"
                    style={{width:"23px"}}
                   
                    
                  />
               </div>
               <div className="col-3">
               <p className="fss">VS </p>
               </div>
               <div className="col-3">
                <img
                    src="/common/img/icons/img6.png"
                    alt="User Icon"
                    style={{width:"23px"}}
                   
                    
                  />
               </div>
               </div>
            
              </div>
              </div>


            
</div>


            </div>

        
        
        <div>
          
         
        </div>
      </aside>
    );
  }
}

export default RightBar;
