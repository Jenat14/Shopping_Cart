import { Route, Routes } from "react-router";
import Home from "@/Pages/Home";
import Cart from "@/Pages/Cart";
export default function Navigator(){
    return(
        <>
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/Cart"} element={<Cart/>}></Route>
            </Routes>
        </>
    )
}