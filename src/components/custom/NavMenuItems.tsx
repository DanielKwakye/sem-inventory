import {CalculatorIcon, UserCogIcon} from "lucide-react";
import {NavLink, useLocation} from "react-router";

function NavMenuItems() {

    const location = useLocation();

    const activeClasses = "border rounded-full flex justify-center items-center px-8 gap-2 bg-[#641713] text-white"
    const inActiveClasses = "w-10 h-10 border border-[#641713] rounded-full flex justify-center items-center"

    return (
        <div className={'flex flex-row gap-2'}>
            <NavLink to={'/account/admin'}
                     className={location.pathname == "/account/admin" ? activeClasses : inActiveClasses}>
                <UserCogIcon size={14} color={location.pathname == "/account/admin" ? '#fff' : '#641713'}/>
                {location.pathname == "/account/admin" && <span className="text-sm">Admin</span>}
            </NavLink>
            <NavLink to={'/account/customer'} className={location.pathname == "/account/customer" ? activeClasses : inActiveClasses}>
                <CalculatorIcon size={14} color={location.pathname == "/account/customer" ? '#fff': '#641713'  } />
                { location.pathname == "/account/customer" && <span className="text-sm">Customer</span> }
            </NavLink>
        </div>
    )
}

export default NavMenuItems