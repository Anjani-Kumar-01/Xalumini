import Button from "./Button";

const SplashScreen = () => {
  return <div className="h-screen bg-[#7F7F80] flex items-center justify-center">
    <div className="bg-white w-[400px] h-[700px] rounded-md flex flex-col items-center p-5">
      <p className="text-5xl mt-[150px] mb-10">Logo</p>
      <p className="text-gray-600 mb-[250px]">Stay connected to your alumni</p>
    <Button text='Alumni/Students' />
    <p className="text-gray-600 my-2">Or</p>
    <Button text='College' />
    </div>
    
  </div>
};

export default SplashScreen;
