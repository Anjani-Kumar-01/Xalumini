import { LuMoveRight } from "react-icons/lu";
import image from "../assets/image/onboarding2.png";
const Onboarding2 = () => {
  return (
    <>
      <img className="mt-7" src={image}/>
      <p className="text-gray-600 my-10 text-center">Connect with alumni and transform 
      friendships into professional support</p>
      <button className="text-white bg-primary rounded-full px-2 py-1 w-full h-10 relative mt-[80px]">
        <p>Continue</p>
        <LuMoveRight className="absolute right-12 bottom-2.5"/>
      </button>
    </>
  );
};

export default Onboarding2;
