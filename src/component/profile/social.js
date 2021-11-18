import React, { Component } from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaMediumM,
} from "react-icons/fa";

class SocialHandle extends Component {
  render() {
    return (
      <div className="mySocialIcons">
        <FaFacebook />
        <FaLinkedinIn />
        <FaTwitter />
        <FaGithub />
        <FaMediumM />
      </div>
    );
  }
}

export default SocialHandle;
