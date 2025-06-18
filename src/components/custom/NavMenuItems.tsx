import {CalculatorIcon, UserCogIcon} from "lucide-react";

function NavMenuItems() {
    return (
        <div className={'flex flex-row gap-2'}>
            <div className="w-14 h-14 border border-[#641713] rounded-full flex justify-center items-center">
                <UserCogIcon size={20} color={'#641713'} />
            </div>
            <div className="border rounded-full flex justify-center items-center px-8 gap-2 bg-[#641713] text-white">
                <CalculatorIcon size={20}/>
                <span>Sales</span>
            </div>
        </div>
    )
}

export default NavMenuItems