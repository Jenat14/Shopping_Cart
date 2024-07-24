import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge"
function NavBar(){

    return(
    <>
        <div className="container content-center p-2 bg-[#201E43] flex items-center">
                <div className="self-center ml-3.5">
                    <a href="#"><img className="w-[70px]" src="src\assets\logo.png"></img></a>
                </div>
                <div className="w-[1000px] flex justify-center">
                    <input type="text"
                    id="items"
                    className="px-3 py-2 border border-gray-300 w-[500px] h-[40px]"
                    placeholder="Search By Category"/>
                    <button className="bg-destructive h-[40px] w-[50px]"><img className="h-[20px] ml-3 w-[auto]"src="src\assets\Search.png"/></button>
                </div>
                <div className="content-center mr-3 flex items-center text-white">
                    <Link to="/" className="m-4 hover:text-zinc-400">Home</Link>
                    <a href="#" className="m-4 hover:text-zinc-400">About</a>
                    <a href="#" className="m-4 hover:text-zinc-400">Login</a>
                    <Link to="/Cart" className="w-[30px] h-[30px"><Badge variant="destructive">0</Badge><img src="src/assets/cart.png"/></Link>
                </div>
        </div>
    </>
    )
}
export default NavBar;