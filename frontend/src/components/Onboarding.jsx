import rightArrow from "../assets/svg/right-arrow.svg"
const Onboarding = ({image, text}) => {
  return (
    <>
      <img className="mt-7" src={image}/>
      <p className="text-gray-600 my-10 text-center">{text}</p>
      <button className="text-white bg-primary rounded-full px-2 py-1 w-full h-10 relative mt-[150px]">
        <p>Continue</p>
        <img className="bg-transparent absolute right-5 -top-3" src={rightArrow}/>
      </button>
    </>
  );
};

export default Onboarding;
