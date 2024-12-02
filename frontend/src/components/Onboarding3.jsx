import { LuMoveRight } from "react-icons/lu";
import image from "../assets/image/onboarding3.png";
const Onboarding3 = () => {
  return (
    <>
      <img className="mt-7" src={image}/>
      <p className="text-gray-600 my-10 text-center">Get better with life and career  </p>
      <button className="text-white bg-primary rounded-full px-2 py-1 w-full h-10 mt-[95px] relative">
        <p>Continue</p>
        <LuMoveRight className="absolute right-12 bottom-2.5"/>
      </button>
    </>
  );
};

export default Onboarding3;
