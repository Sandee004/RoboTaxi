import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-4">
      <div className="flex items-center">
        <h1 className="text-white text-2xl font-bold">TaxiCoin</h1>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <Link
          to="#features"
          className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
        >
          About
        </Link>
        <Link
          to="#footer"
          className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
