import BlurWindow from "./components/BlurWindow";
import Onboarding1 from "./components/Onboarding1";
import Onboarding2 from "./components/Onboarding2";
import Onboarding3 from "./components/Onboarding3";
import SplashScreen from "./components/SplashScreen";
import SignIn from "./components/SignIn";
const App = () => {
	return (
		<>
			<BlurWindow >
				{/* <SplashScreen/> */}
				{/* <Onboarding1/> */}
				{/* <Onboarding2/> */}
				{/* <Onboarding3/> */}
				<SignIn/>
			</BlurWindow>
		</>
	)
}
export default App;