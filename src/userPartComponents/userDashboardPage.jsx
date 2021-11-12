import React, { Component } from "react";
import HeaderPart from "../commonComponents/headerPart";
import LeftSidebar from "../commonComponents/leftSidebar";

import MainSectionPart from "../commonComponents/mainSectionPart";
import ChangePassword from "../userComponents/changePassword";
import { Route } from "react-router-dom";
import NotificationList from "../userComponents/notificationList";
import * as getUserDetailService from "../services/registerationServices/getUserDetailsServices";
import UserProfile from "../userComponents/userProfile";
import EditProfile from "../userComponents/editProfile";
import UserAchievements from "./../userComponents/userAchievements";
import AboutusPage from "./../userComponents/aboutusPage";
import TermsAndConditionPage from "./../userComponents/termsAndConditionPage";
import PrivacyPolicyPage from "./../userComponents/privacyPolicyPage";
import HelpAndSupportPage from "./../userComponents/helpAndSupportPage";
import HowToPlayPage from "./../userComponents/howToplayPage";
import PuzzleGamePage from "./../puzzleComponent/puzzleGamePage";
import MyAccount from "../userComponents/myAccount";
import VipAvailableCourse from "./../vipVideoComponent/vipAvailableCourse";
import BotGamePage from "../botGameComponents/botGamePage";

import VipUserCourse from "./../vipVideoComponent/vipUserCourse";
import VipCourseDetail from "./../vipVideoComponent/vipCourseDetail";
import VipCourseVideo from "./../vipVideoComponent/vipCourseVideo";
import SchoolTournament from "./../tournamentComponent/schoolTournament";
import AreaclubTournament from "./../tournamentComponent/areaclubTournament";
import SchoolTournamentDetail from "../tournamentComponent/schoolTournamentDetail";
import AreaclublTournamentDetail from "../tournamentComponent/areaclubTournamentDetail";
import UserTournament from "./../tournamentComponent/userTournament";
import UserTournamentDetail from "../tournamentComponent/userTournamentDetail";
import WhitePlayerVsPlayerGamePage from "../botGameComponents/whitePlayerGamePage";
import BlackPlayerVsPlayerGamePage from "../botGameComponents/blackPlayerGamePage";
import CoachingType from "./../coachingComponent/coachingType";
import MyCoaching from "./../coachingComponent/myCoaching";
import CoachingDetail from "./../coachingComponent/coachingDetail";
import CoachingGameRoom from "./../coachingComponent/coachingGameRoom";
import OpenTournament from "./../tournamentComponent/openTournament";
import OpenTournamentDetail from "./../tournamentComponent/openTournamentDetail";
import TournamentMatch from "./../tournamentComponent/tournamentMatch";
import TournamentGameRoom from "../tournamentComponent/tournamentGameRoom";
import TournamentTeamResult from "../tournamentComponent/tournamentTeamResult";
import TournamentResult from "./../tournamentComponent/tournamentResult";
import SinglePlayer from "./../leaderBoardComponent/singlePlayer";
import Tournament from "./../leaderBoardComponent/tournament";
import CoachDetail from "./../coachingComponent/coachDetail";
import ScrollToTopOnMount from "./scrollToTopOnMount ";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import SearchResult from "./../userComponents/searchResult";
import { getMyFriendList } from "../services/friendRequestService";
import ModalDisplayingGameRequestFromFriend from "../botGameComponents/modalDisplayingGameRequestFromFriend";
import FriendRequest from "./../userComponents/friendRequest";
import ReferEarn from "../userComponents/referEarn";
import GameRoomListing from "../commonComponents/gameRoomListing";
import ViewTransferHistory from "../userComponents/ViewTranferHistory";
import RightBar from "../commonComponents/rightBar";

class UserDashboardPage extends Component {
  state = {
    userData: {},
    leftBar: false,
    client: {},
    friendList: [],
    showGameRequestModalFromFriend: false,
    friendUserNameSendingRequest: "",
  };

  // getUserData = async () => {
  //   const userData = await getUserDetailService.getUserDashboardDetails();

  //   this.setState({ userData });
  // };

  // componentWillMount = async () => {
  //   console.log(this.props);
  //   if (await !localStorage.getItem("userToken"))
  //     return this.props.history.push("/user/login");
  //   await this.getUserData();
  //   const { data } = await getMyFriendList("user");
  //   const friendList = data.friendList;
  //   // console.log(data.friendList);
  //   this.setState({ friendList });
  // };

  // componentDidMount = async () => {
  //   const client = new W3CWebSocket(
  //     `${process.env.REACT_APP_WEBSOCKET}?token=${localStorage.getItem(
  //       "userToken"
  //     )}`
  //   );
  //   client.onopen = () => {
  //     console.log("WebSocket Client Connected");
  //   };
  //   client.onmessage = async (message) => {
  //     // console.log(message);
  //     const data = await JSON.parse(message.data);

  //     if (data.type === "receivedRequestToPlayWithFriend") {
  //       // console.log("in black game");
  //       // console.log(data);
  //       alert("request to play received");
  //       this.setState({
  //         showGameRequestModalFromFriend: !this.state
  //           .showGameRequestModalFromFriend,
  //         friendUserNameSendingRequest: data.friendUserName,
  //       });
  //     }
  //     if (data.type === "yourRequestToPlayWithFriencAccepted") {
  //       // console.log("in black game");
  //       // console.log(data);
  //       alert("request accepted");
  //       this.props.history.push("friendGame/black:5");
  //     }
  //   };
  //   this.setState({ client: client });
  // };

  // sendGameRequestToFriend = (friend) => {
  //   console.log(friend.friendId._id);
  //   this.state.client.send(
  //     JSON.stringify({
  //       type: "requestToPlayWithFriend",
  //       friendId: friend.friendId._id,
  //     })
  //   );
  // };

  // acceptGameRequestFromFriend = () => {
  //   this.setState({
  //     showGameRequestModalFromFriend: false,
  //   });
  //   this.state.client.send(
  //     JSON.stringify({
  //       type: "acceptToPlayWithFriend",
  //       friendUserName: this.state.friendUserNameSendingRequest,
  //     })
  //   );
  //   this.props.history.push("friendGame/white:5");
  // };

  // rejectGameRequestFromFriend = () => {
  //   this.setState({
  //     showGameRequestModalFromFriend: false,
  //     friendUserNameSendingRequest: "",
  //   });
  // };

  render() {
    return (
      <div className="mainpart">
        <ScrollToTopOnMount />
        <HeaderPart
          userData={this.state.userData}
          handleClick={() => {
            this.setState({ leftBar: !this.state.leftBar });
          }}
          {...this.props}
        />

        {this.props.location.pathname.includes("bot") || this.props.location.pathname.includes("play") ?  (
          ""
        ) : (
          <LeftSidebar
            userData={this.state.userData}
            leftBar={this.state.leftBar}
            {...this.props}
          />
        )}
        <Route
          exact
          onUpdate={() => window.scrollTo(0, 0)}
          path={["/user", "/user/dashboard"]}
          render={() => (
            <MainSectionPart
              friendList={this.state.friendList}
              sendGameRequestToFriend={this.sendGameRequestToFriend}
            />
          )}
        />
        <Route exact path="/user/changePassword" component={ChangePassword} />
        <Route exact path="/user/profile" component={UserProfile} />
        <Route exact path="/user/editProfile" component={EditProfile} />
        <Route exact path="/user/notifications" component={NotificationList} />
        <Route
          exact
          path="/user/search-result/:searchKey"
          component={SearchResult}
        />
        <Route exact path="/user/friend-request" component={FriendRequest} />
        <Route exact path="/user/achievements" component={UserAchievements} />
        <Route exact path="/user/about-us" component={AboutusPage} />
        <Route
          exact
          path="/user/terms-and-condition"
          component={TermsAndConditionPage}
        />
        <Route
          exact
          path="/user/privacy-policy"
          component={PrivacyPolicyPage}
        />
         <Route
          exact
          path="/user/refer-earn"
          component={ReferEarn}
        />
        <Route
          exact
          path="/user/help-and-support"
          component={HelpAndSupportPage}
        />
        <Route exact path="/user/how-to-Play" component={HowToPlayPage} />
        <Route exact path="/user/puzzleGame" component={PuzzleGamePage} />
        <Route
          exact
          path="/user/botGame"
          component={BotGamePage}
        />
        <Route
          exact
          path={["/user/friendGame/white:timer", "/user/random/white:timer"]}
          render={() => (
            <WhitePlayerVsPlayerGamePage
              userData={this.state.userData}
              client={this.state.client}
              {...this.props}
            />
          )}
        />
        <Route
          exact
          path={["/user/friendGame/black:timer", "/user/random/black:timer"]}
          render={() => (
            <BlackPlayerVsPlayerGamePage
              userData={this.state.userData}
              client={this.state.client}
              {...this.props}
            />
          )}
        />
        {/* <Route
          exact
          path="/user/friendGame"
          render={(props) => <BlackPlayerVsPlayerGamePage {...props} />}
        /> */}
        <Route exact path="/user/my-account" component={MyAccount} />
        <Route
          exact
          path="/user/vip-available-course"
          component={VipAvailableCourse}
        />
        <Route exact path="/user/vip-user-course" component={VipUserCourse} />
        <Route
          exact
          path="/user/vip-course-detail"
          component={VipCourseDetail}
        />
        <Route exact path="/user/vip-course-video" component={VipCourseVideo} />
        <Route
          exact
          path="/user/school-tournament"
          component={SchoolTournament}
        />
        <Route
          exact
          path="/user/school-tournament-detail"
          component={SchoolTournamentDetail}
        />
        <Route
          exact
          path="/user/area-club-tournament-detail"
          component={AreaclublTournamentDetail}
        />
        <Route
          exact
          path="/user/area-club-tournament"
          component={AreaclubTournament}
        />
        <Route exact path="/user/open-tournament" component={OpenTournament} />
        <Route
          exact
          path="/user/open-tournament-detail"
          component={OpenTournamentDetail}
        />
        <Route
          exact
          path="/user/tournament-match"
          component={TournamentMatch}
        />
        <Route
          exact
          path="/user/tournament-game-room-play"
          component={TournamentGameRoom}
        />
        <Route exact path="/user/user-tournament" component={UserTournament} />
        <Route exact path="/user/coaching-type-list" component={CoachingType} />
        <Route exact path="/user/my-coaching-list" component={MyCoaching} />
        <Route exact path="/user/coaching-detail" component={CoachingDetail} />
        <Route exact path="/user/coach-detail" component={CoachDetail} />
        <Route
          exact
          path="/user/coaching-game-room"
          component={CoachingGameRoom}
        />
        <Route
          exact
          path="/user/tournament-team-result"
          component={TournamentTeamResult}
        />
        <Route
          exact
          path="/user/tournament-result"
          component={TournamentResult}
        />
        <Route
          exact
          path="/user/single-player-leaderboard"
          component={SinglePlayer}
        />
        <Route
          exact
          path="/user/tournament-leaderboard"
          component={Tournament}
        />
        <Route
          exact
          path="/user/user-tournament-detail"
          component={UserTournamentDetail}
        />
        <Route exact path="/user/game-room-listing" component={GameRoomListing} />
        <Route exact path="/user/view-history" component={ViewTransferHistory} />
        {this.props.location.pathname.includes("bot") || this.props.location.pathname.includes("play") ?  (
          ""
        ) : (
          <RightBar/>
           
         
        )}
       
        
        {this.state.showGameRequestModalFromFriend ? (
          <ModalDisplayingGameRequestFromFriend
            showModal={this.state.showGameRequestModalFromFriend}
            friendUserName={this.state.friendUserNameSendingRequest}
            rejectGameRequest={this.rejectGameRequestFromFriend}
            acceptGameRequest={this.acceptGameRequestFromFriend}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default UserDashboardPage;
