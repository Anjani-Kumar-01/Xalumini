import { Route, Routes } from "react-router-dom";
import BlurWindow from "./components/BlurWindow";
import Onboarding1 from "./components/Onboarding1";
import Onboarding2 from "./components/Onboarding2";
import Onboarding3 from "./components/Onboarding3";
import SplashScreen from "./components/SplashScreen";
import SignIn from "./components/SignIn";
import Home from "./frontend/src/pages/home";  // Corrected capitalization
import Signup from "./frontend/src/pages/signup";  // Corrected capitalization

const App = () => {
  return (
    <>
      <BlurWindow>
        {/* <SplashScreen /> */}
        {/* <Onboarding1 /> */}
        {/* <Onboarding2 /> */}
        {/* <Onboarding3 /> */}
        <SignIn />
      </BlurWindow>

      <Routes>
        <Route path="/" element={<Home />} /> {/* Corrected path */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} /> {/* Corrected capitalization */}
      </Routes>
    </>
  );
};

export default App;