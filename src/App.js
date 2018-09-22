import React, { PureComponent } from "react";
import Lottie from "react-lottie";
import { loader } from "./loader.js";
import "./App.css";
import scooter from "./images/scooter.svg";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: true };
  }
  componentDidMount() {
    setTimeout(() => {
      this.animation.play()
    }, 2000)
  }

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: false,
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
          ref={ref => this.animation = ref}
        />
        {/* <span className="company-name">CLOVER COMPANY</span> */}
        <span className="cooming-soon">Be Part of The Future</span>
        <img src={scooter} alt="scooter" className="scooter" />
      </div>
    );
  }
}

export default App;
