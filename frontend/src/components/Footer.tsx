const Footer = () => {
    return (
      <>
        <div className="bg-blue-800 py-10">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
            <span className="text-3xl text-white font-bold tracking-tight">
              StayEase.com
            </span>
            <span className="text-white tracking-tight font-bold flex gap-4 mt-4 sm:mt-0">
              <p className="cursor-pointer hover:underline">Terms of Service</p>
            </span>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;
  