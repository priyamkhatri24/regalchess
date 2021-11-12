import React, { Component } from "react";
let myInterval;
class GameTimer extends Component {
  constructor(props) {
    super(props);
    if (this.props.timer) {
      this.state = {};
      this.state.timer = this.props.timer * 60;
      this.state.seconds = this.state.timer % 60;
      this.state.minutes = Math.floor(this.state.timer / 60);
    }
  }

  componentDidMount = async () => {
    myInterval = setInterval(async () => {
      if (this.state.timer <= 0) {
        clearInterval(myInterval);
      }
      if (this.state.timer > 0) {
        const timer = this.state.timer - 4;
        const seconds = timer % 60;
        const minutes = Math.floor(timer / 60);
        this.setState({
          timer,
          seconds,
          minutes,
        });
      }
    }, 4000);
  };

  render() {
    if (!this.props.timer) return;
    return (
      <div className="game-time">
        <ul>
          <li>
            <img src="/common/img/icons/watch.png" alt="Watch Image" />
          </li>
          <li>{this.state.minutes}</li>
          <li>:</li>
          <li>{this.state.seconds}</li>
        </ul>
      </div>
    );
  }
}

export default GameTimer;
