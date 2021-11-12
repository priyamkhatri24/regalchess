import React, { Component } from "react";
import HeaderPart from "../coachCommonComponent/headerPart";
import LeftSidebar from "../coachCommonComponent/leftSidebar";

import { Route } from "react-router-dom";
import MainSectionPart from "./../coachComponent/mainSectionPart";
import ChangePassword from "../userComponents/changePassword";
import NotificationList from "../userComponents/notificationList";
import * as coachService from "../services/registerationServices/coachServices";
import UserProfile from "../userComponents/userProfile";
import HelpAndSupportPage from "../userComponents/helpAndSupportPage";
import TermsAndConditionPage from "../userComponents/termsAndConditionPage";
import AboutusPage from "../userComponents/aboutusPage";
import PersonalCoaching from './../coachComponent/personalCoaching';
import CoachingRoom from './../coachComponent/coachingRoom';
import OrganizeTournament from './../coachComponent/organizeTournament';
import TournamentList from './../coachComponent/tournamentList';
import OngoingList from './../coachComponent/ongoingList';
import TournamentSession from './../coachComponent/tournamentSession';
import TournamentMatch from "../coachComponent/tournamentMatch";
import TournamentGameDetail from './../coachComponent/tournamentGameDetail';
import CompleteTournament from './../coachComponent/completeTournament';
import CoachProfile from './../coachComponent/coachProfile';
import TournamentDetail from "../coachComponent/tournamentDetail";
import CoacheditProfile from './../coachComponent/coacheditProfile';
import ScrollToTopOnMount from './../userPartComponents/scrollToTopOnMount ';
class CoachDashboardPage extends Component {
  state = {
    userData: {},
    leftBar: false,
  };

  getUserData = async () => {
    const userData = await coachService.getCoachDashboardDetails();

    this.setState({ userData });
  };

  componentWillMount = async () => {
    if (await !localStorage.getItem("coachToken"))
      return this.props.history.push("/coach/login");
    await this.getUserData();
  };

  render() {
    return (
      <div className="mainpart">
      <ScrollToTopOnMount/>
        <HeaderPart
          userData={this.state.userData}
          handleClick={() => {
            this.setState({ leftBar: !this.state.leftBar });
          }}
          {...this.props}
        />
        <LeftSidebar
          userData={this.state.userData}
          leftBar={this.state.leftBar}
        />

        <Route exact path="/coach/dashboard" component={MainSectionPart} />
        <Route exact path="/coach/personal-coaching" component={PersonalCoaching} />
        <Route exact path="/coach/coaching-room" component={CoachingRoom} />
        <Route exact path="/coach/organize-tournament" component={OrganizeTournament} />
        <Route exact path="/coach/tournament-list" component={TournamentList} />
        <Route exact path="/coach/ongoing-list" component={OngoingList} />
        <Route exact path="/coach/tournament-session" component={TournamentSession} />
        <Route exact path="/coach/tournament-match" component={TournamentMatch} />
        <Route exact path="/coach/tournament-game-detail" component={TournamentGameDetail} />
        <Route exact path="/coach/complete-tournament" component={CompleteTournament} />
        <Route exact path="/coach/tournament-detail" component={TournamentDetail} />
        <Route exact path="/coach/profile" component={CoachProfile} />
        <Route exact path="/coach/coacheditProfile" component={CoacheditProfile} />
        <Route exact path="/coach/changePassword" component={ChangePassword} />
        <Route exact path="/coach/notifications" component={NotificationList} />
        <Route
          exact
          path="/coach/help-and-support"
          component={HelpAndSupportPage}
        />
        <Route
          exact
          path="/coach/terms-and-condition"
          component={TermsAndConditionPage}
        />
        <Route exact path="/coach/about-us" component={AboutusPage} />
        
      </div>
    );
  }
}

export default CoachDashboardPage;
