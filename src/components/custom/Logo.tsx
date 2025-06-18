import {NavLink} from "react-router";
import {brandLogoImg} from "@/assets";

function Logo() {
    return (
        <NavLink to="/">
            <img src={brandLogoImg} className="" alt="Company logo"/>
        </NavLink>
    )
}

export default Logo