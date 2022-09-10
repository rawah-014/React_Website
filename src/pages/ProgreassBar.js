import { Container, Row, Col } from "react-bootstrap";
//import Image from 'react-bootstrap/Image'
import logo from "../assets/logo.png";
import login from "../assets/icons/login.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../component/GetInTouchSection.css";
import "./Step1.css";
import "./Login.css";
import user from "../assets/icons/user.png";
import { Link } from "react-router-dom";

import { ProgressBar , Step } from "react-step-progress-bar";

function ProgreassBar() {
  return (
    <div>
      
      <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`step ${accomplished?"completed" : 
        ""}`}>1</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`step ${accomplished?"completed" : 
            ""}`}>2</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`step ${accomplished?"completed" : 
            ""}`}>3</div>
          )}
        </Step>
      </ProgressBar>
      
    </div>
  );
}

export default ProgreassBar;
