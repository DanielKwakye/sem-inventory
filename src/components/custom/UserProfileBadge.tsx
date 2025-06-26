import {adminProfilePic, salesProfilePic} from "@/assets";
import {useNavigate} from "react-router";
import {useAppDispatch, useAppSelector} from "@/store";
import {LogOutIcon} from "lucide-react";
import {logout} from "@/store/auth-slice.ts";

function UserProfileBadge() {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const userRole = useAppSelector(state => state.auth.userRole)

    const logoutHandler = () => {
        dispatch(logout())
        navigate("/");
    }

    return (
        <div className={`flex flex-row gap-4 p-2 rounded-full  ${userRole == "admin" ? 'bg-[#f8f4fd]': 'bg-white'}`}>
            <div className="w-8 h-8 rounded-full overflow-clip">
                <img src={userRole == "admin" ? adminProfilePic : salesProfilePic} alt="profile pic" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col pr-4 cursor-pointer" onClick={logoutHandler}>
                <h3 className={"font-bold text-xs"}>Logged in as { userRole == "admin" ? "Administrator" : "Customer" } </h3>
                <p className={"text-xs font-light text-slate-500 inline-flex gap-1 items-center"}>
                    <LogOutIcon size={10} />
                    <span>Logout</span>
                </p>
            </div>
        </div>
    )
}

export default UserProfileBadge;