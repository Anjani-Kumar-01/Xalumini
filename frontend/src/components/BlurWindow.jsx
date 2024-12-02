const BlurWindow = ({children}) => {
  return <div className="h-screen sm:bg-[#7F7F80] flex items-center justify-center">
    <div className="bg-white w-[402px] h-auto rounded-md flex flex-col items-center p-5">
    {children}
    </div>
  </div>
};

export default BlurWindow;
