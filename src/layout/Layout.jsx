import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navigation/Navbar";

export default function Layout(){
    return (
        <>  
            <Navbar/>
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}