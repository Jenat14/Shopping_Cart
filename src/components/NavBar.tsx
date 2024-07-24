function NavBar(){
    return(
    <>
        <div className="container content-center p-2 bg-[#201E43] flex items-center justify-between">
                <div className="self-center ml-3.5">
                    <a href="#"><img className="w-[50px]" src="src\assets\logo.svg"></img></a>
                </div>
                <div className="w-[1000px] flex justify-center">
                    <input type="text"
                    id="items"
                    className="px-3 py-2 border border-gray-300 w-[500px] h-[40px]"
                    placeholder="Search For Products"/>
                    <button className="bg-[#508C9B] h-[40px] w-[50px]"><img className="h-[20px] ml-3 w-[auto]"src="src\assets\Search.png"/></button>
                </div>
                <div className="content-center flex items-center text-white">
                    <a href="#" className="m-4 hover:text-zinc-400">Home</a>
                    <a href="#" className="m-4 hover:text-zinc-400">About</a>
                    <a href="#" className="m-4 hover:text-zinc-400">Login</a>
                    <a href="#" className="w-[30px] h-[30px"><img src="src/assets/cart.png"/></a>
                </div>
        </div>
    </>
    )
}
export default NavBar;