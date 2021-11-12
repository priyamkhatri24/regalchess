import React, { Component } from "react";
import HeaderPart from "../commonComponents/headerPart";
import LeftSidebar from "../commonComponents/leftSidebar";

import MainSectionPart from "../commonComponents/mainSectionPart";
import ChangePassword from "../userComponents/changePassword";
import { Route } from "react-router-dom";
import NotificationList from "../userComponents/notificationList";
import * as getGuestUserDetailService from "../services/registerationServices/getGuestUserDetailsService";
import UserProfile from "../userComponents/userProfile";
import EditProfile from "../userComponents/editProfile";
import UserAchievements from "../userComponents/userAchievements";
import AboutusPage from "./../userComponents/aboutusPage";
import TermsAndConditionPage from "./../userComponents/termsAndConditionPage";
import PrivacyPolicyPage from "./../userComponents/privacyPolicyPage";
import HelpAndSupportPage from "./../userComponents/helpAndSupportPage";
import HowToPlayPage from "./../userComponents/howToplayPage";
import PuzzleGamePage from "./../puzzleComponent/puzzleGamePage";
import BotGamePage from "../botGameComponents/botGamePage";
import SchoolTournament from './../tournamentComponent/schoolTournament';
import AreaclubTournament from './../tournamentComponent/areaclubTournament';
import SchoolTournamentDetail from "../tournamentComponent/schoolTournamentDetail";
import AreaclublTournamentDetail from "../tournamentComponent/areaclubTournamentDetail";
import UserTournament from './../tournamentComponent/userTournament';
import UserTournamentDetail from "../tournamentComponent/userTournamentDetail";
import ScrollToTopOnMount from './../userPartComponents/scrollToTopOnMount ';
class GuestUserDashboardPage extends Component {
  state = {
    guestUserData: {},
    leftBar: false,
  };

  getGuestUserData = async () => {
    const guestUserData = await getGuestUserDetailService.getGuestUserDashboardDetails();
    this.setState({ guestUserData });
  };

  componentWillMount = async () => {
    if (await !localStorage.getItem("guestUserToken"))
      return this.props.history.push("/login");
    await this.getGuestUserData();
  };

  render() {
    return (
      <div className="mainpart">
      <ScrollToTopOnMount/>
        <HeaderPart
          userData={this.state.guestUserData}
          handleClick={() => {
            this.setState({ leftBar: !this.state.leftBar });
          }}
          {...this.props}
        />
        {this.props.location.pathname.includes("Game") ? (
          ""
        ) : (
          <LeftSidebar
            userData={this.state.guestUserData}
            leftBar={this.state.leftBar}
            {...this.props}
          />
        )}
        <Route exact path="/guest/dashboard" component={MainSectionPart} />
        <Route exact path="/guest/changePassword" component={ChangePassword} />
        <Route exact path="/guest/editProfile" component={EditProfile} />
        <Route exact path="/guest/notifications" component={NotificationList} />
        <Route exact path="/guest/achievements" component={UserAchievements} />
        <Route exact path="/guest/about-us" component={AboutusPage} />
        <Route
          exact
          path="/guest/terms-and-condition"
          component={TermsAndConditionPage}
        />
        <Route
          exact
          path="/guest/privacy-policy"
          component={PrivacyPolicyPage}
        />
        <Route
          exact
          path="/guest/help-and-support"
          component={HelpAndSupportPage}
        />
        <Route exact path="/guest/how-to-Play" component={HowToPlayPage} />
        <Route exact path="/guest/puzzleGame" component={PuzzleGamePage} />
        <Route exact path="/guest/botGame" component={BotGamePage} />
        <Route exact path="/guest/school-tournament" component={SchoolTournament} />
        <Route exact path="/guest/school-tournament-detail" component={SchoolTournamentDetail} />
        <Route exact path="/guest/area-club-tournament-detail" component={AreaclublTournamentDetail} />
        <Route exact path="/guest/area-club-tournament" component={AreaclubTournament} />
        <Route exact path="/guest/user-tournament" component={UserTournament} />
        <Route exact path="/guest/user-tournament-detail" component={UserTournamentDetail} />
       
      </div>
    );
  }
}

export default GuestUserDashboardPage;
