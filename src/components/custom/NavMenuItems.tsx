import {CalculatorIcon, UserCogIcon} from "lucide-react";

function NavMenuItems() {
    return (
        <div className={'flex flex-row gap-2'}>
            <div className="w-10 h-10 border border-[#641713] rounded-full flex justify-center items-center">
                <UserCogIcon size={14} color={'#641713'} />
            </div>
            <div className="border rounded-full flex justify-center items-center px-8 gap-2 bg-[#641713] text-white">
                <CalculatorIcon size={14}/>
                <span className="text-sm">Sales</span>
            </div>
        </div>
    )
}

export default NavMenuItems