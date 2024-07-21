import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {

    const location = useLocation()

    useEffect(() => {
        console.log(location)
    },[location])

    const navItems = [
        {
            endpoint: "/all",
            title: "All"
        },
        {
            endpoint: "/today",
            title: "Today"
        },
        {
            endpoint: "/feature",
            title: "Features"
        },
        {
            endpoint: "/last-month",
            title: "Last Month"
        },
        {
            endpoint: "/last-3-months",
            title: "Last 3 Month"
        },
        {
            endpoint: "/last-12-months",
            title: "Last 12 Month"
        },
    ]

    return(
        <div className="sidebar">
            <ul>
                {navItems.map(each => {
                    return (
                        <li className={`${location?.pathname === each.endpoint && 'selected'}`}>
                        <Link to={each.endpoint} >{each.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar;