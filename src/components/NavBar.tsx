import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Logo from "../assets/logo.png";
import Searching from "../assets/Search.png";
import Cart from "../assets/cart.png";

function NavBar() {
  return (
    <>
      <div className="container mx-auto p-2 bg-[#201E43] flex items-center flex-wrap">
        <div className="self-center ml-3.5 flex-shrink-0">
          <a href="#">
            <img className="w-[50px] md:w-[70px]" src={Logo} alt="Logo" />
          </a>
        </div>

        <div className="flex-grow w-full md:w-auto flex justify-center my-2 md:my-0">
          <input
            type="text"
            id="items"
            className="px-3 py-2 border border-gray-300 w-full md:w-[500px] h-[40px] rounded-l-md"
            placeholder="Search By Category"
          />
          <button className="bg-destructive h-[40px] w-[50px] rounded-r-md">
            <img className="h-[20px] mx-auto w-[auto]" src={Searching} alt="Search" />
          </button>
        </div>

        <div className="flex sm:justify-evenly justify-end w-full md:w-auto content-center text-white">
          <Link to="/" className="m-2 content-center md:m-4 hover:text-zinc-400">
            Home
          </Link>
          <a href="#" className="m-2 content-center md:m-4 hover:text-zinc-400">
            About
          </a>
          <a href="#" className="m-2 content-center md:m-4 hover:text-zinc-400">
            Login
          </a>
          <Link to="/Cart" className="flex flex-col items-center m-2 md:m-4 hover:text-zinc-400">
            <Badge variant="destructive">0</Badge>
            <img src={Cart} alt="Cart" className="ml-1 w-[30px] h-[30px]" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
