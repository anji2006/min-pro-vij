import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

import "./layout.css"

function Layout(){
    return(
        <div className="layout">
            <Header />
            <div className="content">

                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout