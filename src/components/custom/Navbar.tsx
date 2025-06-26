import Logo from "@/components/custom/Logo.tsx";
import NavMenuItems from "@/components/custom/NavMenuItems.tsx";
import UserProfileBadge from "@/components/custom/UserProfileBadge.tsx";
import {useAppSelector} from "@/store";

function Navbar() {
    const userRole = useAppSelector(state => state.auth.userRole)
    return (
        <div className={`flex justify-between items-center`}>
            <Logo/>
            { userRole == "admin" && <NavMenuItems /> }
            <UserProfileBadge />
        </div>
    )
}

export default Navbar;