import { LuMoveRight } from "react-icons/lu";
import image from "../assets/image/onboarding1.png";
const Onboarding1 = () => {
  return (
    <>
      <img className="mt-7" src={image}/>
      <p className="text-gray-600 my-10 text-center">Get In touch with your college and college friends</p>
      <button className="text-white bg-primary rounded-full px-2 py-1 w-full h-10 relative mt-[190px]">
        <p>Continue</p>
        <LuMoveRight className="absolute right-12 bottom-2.5"/>
      </button>
    </>
  );
};

export default Onboarding1;
