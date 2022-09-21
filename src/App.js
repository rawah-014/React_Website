import { Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import FeaturesSection from "./component/FeaturesSection";
import FooterSection from "./component/FooterSection";
import GetInTouchSection from "./component/GetInTouchSection";
import HowSection from "./component/HowSection";
import InfoSection from "./component/InfoSection";
import LoyalSection from "./component/LoyaSection";
import NavBar from "./component/NavBar";
import Home from "./Home";
import Choose from "./pages/Choose";
import Login from "./pages/Login";
import ProgreassBar from "./pages/ProgreassBar";
import StepOne from "./pages/Step1";
import StepFour from "./pages/StepFour";
import StepThree from "./pages/StepThree";
import StepTwo from "./pages/StepTwo";
import StepTwoPoints from "./pages/StepTwoPoints";
import { useSelector } from 'react-redux'

import ProtectedRoute from './route/ProtectedRoute'



function App() {

  const { user, isAuthenticated, loading } = useSelector(state => state.auth)

  return (
    <div >
     {/*  <Home /> */}
     {/* <Login /> */}
     {/* <StepOne /> */}
     <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/login" element={ <Login />} />
      <Route path="/StepOne" element={ <StepOne />} />
      <Route path="/StepTwo" element={ <StepTwo />} />
      <Route path="/points" element={ <StepTwoPoints />} />
      <Route path="/StepThree" element={ <StepThree />} />
      <Route path="/StepFour" element={ <StepFour />} />
      <Route path="/choose" element={ <Choose />} />
      <Route path="/ProgreassBar" element={ <ProgreassBar   />} />
      </Routes>
    
                      </div>

                    
  );
}

export default App;
