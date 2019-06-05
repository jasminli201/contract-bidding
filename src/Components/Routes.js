import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login.js";
import SignupC from "./Signup/SignupC.js";
import SignupA from "./Signup/SignupA.js";
import SignupS from "./Signup/SignupS.js";
import ComContractSubmit from "./Company/ComContractSubmit.js";
import ViewContracts from "./Admin/ViewContracts.js";
import Challenge from "./Admin/Challenge.js";
import StudentProfile from "./Student/StudentProfile.js";
import StudentMarket from "./Student/StudentMarket.js";

export default class Routes extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signupa" component={SignupA} />
          <Route exact path="/signupc" component={SignupC} />
          <Route exact path="/signups" component={SignupS} />
          <Route exact path="/contract" component={ComContractSubmit} />
          <Route exact path="/approve" component={ViewContracts} />
          <Route exact path="/subchallenge" component={Challenge} />
          <Route exact path="/profile" component={StudentProfile} />
          <Route exact path="/marketplace" component={StudentMarket} />
        </Switch>
      </main>
    );
  }
}
