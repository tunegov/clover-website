import React, { PureComponent } from "react";
import Lottie from "react-lottie";
import { loader } from "./loader.js";
import "./App.css";
import scooter from "./images/scooter.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'


const socialMediaIcons = [
  {
    url: 'https://www.instagram.com/clover_company_/',
    icon: faInstagram,
  },
  {
    url: 'https://twitter.com/clover_company_',
    icon: faTwitter,
  },
  {
    url: 'https://www.facebook.com/clover.company.real/',
    icon: faFacebookF,
  },
];

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

  _redirectTo(url) {
    window.open(url, "_blank")
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
        <h2 className="cooming-soon">Be Part of The Future</h2>
        <img src={scooter} alt="clover-scooter" className="scooter" />
        <div className="social-icons">
          {socialMediaIcons.map((i) => (
            <div className="social-icon" onClick={this._redirectTo.bind(this, i.url)}>
              <FontAwesomeIcon icon={i.icon} color={"white"} size={"2x"} fixedWidth={50} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
