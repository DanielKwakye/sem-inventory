import {salesProfilePic} from "@/assets";
import {useLocation} from "react-router";

function UserProfileBadge() {
    const location = useLocation();

    return (
        <div className={`flex flex-row gap-4 p-2 rounded-full  ${location.pathname == '/admin' ? 'bg-[#f8f4fd]': 'bg-white'}`}>
            <div className="w-8 h-8 rounded-full overflow-clip">
                <img src={salesProfilePic} alt="profile pic" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col pr-4">
                <h3 className={"font-bold text-xs"}>Daniel Kwakye</h3>
                <p className={"text-xs font-light text-slate-500"}>Sale Rep #202381843</p>
            </div>
        </div>
    )
}

export default UserProfileBadge;