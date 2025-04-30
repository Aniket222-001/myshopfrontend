import Navbar from "./Pages/Navbar";
import { Outlet } from "react-router-dom";
import Login from "./Pages/Login";


export default function Home(){
    return(
        <div>
        <Navbar/>
        {/* <Login/> */}
        <Outlet/>
        </div>
    )
}