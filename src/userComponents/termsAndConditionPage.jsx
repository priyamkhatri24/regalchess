import React, { Component } from "react";
import { Link } from "react-router-dom";
import httpUserService from "../services/httpUserService";
const parse = require("html-react-parser");
class TermsAndConditionPage extends Component {
  state = {
    editorState: null,
  };

  // componentDidMount = async () => {
  //   let stake;
  //   if (await this.props.match.path.includes("guest")) stake = "guest";
  //   if (await this.props.match.path.includes("user")) stake = "user";
  //   if (await this.props.match.path.includes("coach")) stake = "user";
  //   const { data, error } = await httpUserService.get(
  //     stake,
  //     `/getTermsAndCondition`
  //   );
  //   data.content = await data.content.replaceAll(`"`, "");
  //   data.content = await data.content.replaceAll("\\n", "");
  //   await this.setState({ editorState: data.content });
  // };

  render() {
    return (
      <div className="content-grid">
        <div className="grid-column mt-4">
          <div className="headingtitle toggledesign">
            <h3>Terms & Conditions</h3>
          </div>
          <div className="widget-box customwidget-box">
            <div className="page-content-area">
              <p class="text-muted  tx-13">
                {/* {this.state.editorState ? parse(this.state.editorState) : ""} */}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. .

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. .

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TermsAndConditionPage;
