import BlurWindow from "./components/BlurWindow";
import Onboarding1 from "./assets/image/onboarding1.png";
import Onboarding from "./components/Onboarding";
import SplashScreen from "./components/SplashScreen";
const App = () => {
	return (
		<>
			<BlurWindow >
				{/* <SplashScreen/> */}
				<Onboarding image={Onboarding1} text='Get In touch with your college and college friends'/>
			</BlurWindow>
		</>
	)
}
export default App;