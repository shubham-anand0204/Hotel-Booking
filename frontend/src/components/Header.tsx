import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-blue-800 py-6">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <span className="text-3xl text-white font-bold tracking-tight">
            <Link to="/">StayEase</Link>
          </span>

          <span className="flex space-x-2">
            <Link
              to="/sign-in"
              className="inline-flex items-center px-6 py-3 font-medium bg-blue-700 text-white rounded-lg transition-colors duration-300 hover:bg-white hover:text-blue-700"
            >
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
