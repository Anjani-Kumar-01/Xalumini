import { Route ,Routes} from "react-router-dom";
import BlurWindow from "./components/BlurWindow";
import Onboarding1 from "./components/Onboarding1";
import Onboarding2 from "./components/Onboarding2";
import Onboarding3 from "./components/Onboarding3";
import SplashScreen from "./components/SplashScreen";
import SignIn from "./components/SignIn";
import home from "./frontend/src/pages/home"
import signup from "./frontend/src/pages/signup";
const App = () => {
	return (
		<>
		<Routes>
   <Route path="./" element={<home/>}/>
   <Route path="./signin" element={<SignIn/>}/>
   <Route path="./signup" element={<signup/>}/>

    </Routes>
		</>
	)
}
export default App;