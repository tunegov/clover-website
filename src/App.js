import React, { PureComponent } from "react";
import Lottie from "react-lottie";
import { loader } from "./loader.js";
import "./App.css";
import scooter from "./images/scooter.svg";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: loader,
      assetsPath: "./images/"
    };

    return (
      <div className="app">
        <Lottie
          options={defaultOptions}
          height={350}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        {/* <span className="company-name">CLOVER COMPANY</span> */}
        <span className="cooming-soon">BE PART OF THE FUTURE</span>
        <img src={scooter} alt="scooter" className="scooter" />
      </div>
    );
  }
}

export default App;
