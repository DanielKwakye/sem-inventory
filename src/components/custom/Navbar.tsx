import Logo from "@/components/custom/Logo.tsx";
import NavMenuItems from "@/components/custom/NavMenuItems.tsx";
import UserProfileBadge from "@/components/custom/UserProfileBadge.tsx";

function Navbar() {
    return (
        <div className={`flex justify-between items-center`}>
            <Logo/>
            <NavMenuItems />
            <UserProfileBadge />
        </div>
    )
}

export default Navbar;