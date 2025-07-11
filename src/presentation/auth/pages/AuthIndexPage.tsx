import {salesProfilePic} from "@/assets";
import AnimatedInView from "@/components/custom/AnimatedInView.tsx";
import {useNavigate} from "react-router";
import {useAppDispatch} from "@/store";
import {updateAuthState} from "@/store/auth-slice.ts";
import PasswordDialog from "@/presentation/auth/components/PasswordDialog.tsx";

function AuthIndexPage() {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const loginHandler = (role: "customer" | "admin") => {
        dispatch(updateAuthState({ userRole: role}))
        navigate(`/account/${role}`);
    };

    return (
        <div className="flex flex-col gap-12 md:gap-0 items-stretch md:flex-row md:h-screen p-6">
            <div className={'md:flex-1 md:flex md:justify-center md:p-16 w-full items-center'}>

                <div className={"flex flex-col md:min-w-sm space-y-8 md:space-y-12"}>

                    <div className="text-start">
                        <h1 className={"text-2xl font-bold"}>Login As</h1>
                        <p className="text-sm text-slate-500">Select an account to continue</p>
                    </div>

                    <div className={"flex gap-4 w-full"}>
                        <AnimatedInView delay={0.1} className={"w-full"}>
                            <PasswordDialog onLoginSuccess={() => loginHandler("admin")}/>
                        </AnimatedInView>
                        <AnimatedInView delay={2 * 0.1} className={"w-full"}>
                            <div className={"aspect-square rounded p-4 flex flex-col gap-8 bg-green-100"}
                                 onClick={() => loginHandler("customer")}>
                                <div className="w-8 h-8 rounded-full overflow-clip">
                                    <img src={salesProfilePic} alt="profile pic"
                                         className="w-full h-full object-cover"/>
                                </div>
                                <div className={"flex justify-center"}>
                                    Customer
                                </div>

                            </div>
                        </AnimatedInView>
                    </div>

                    <div>
                        <p className="tracking-wide">Created by:</p>
                        <div className={"h-2"}></div>
                        <p className={"text-sm font-bold"}>Daniel Kwakye: 202381843</p>
                        <p className={"text-sm font-bold"}>OluwaDamilola Oluwalowo: 202291411</p>
                    </div>

                </div>

            </div>
            <div
                className={'md:flex-1 md:h-full rounded-lg bg-gradient-to-tr from-[#641713] via-[#7a1a17] to-[#991f1a] p-4 md:p-16 flex flex-col gap-12 md:justify-center w-full'}>

                {/*  */}
                <div className="space-y-4">
                    <h1 className="text-primary-foreground text-2xl font-bold tracking-wide">
                        Inventory Management Tool
                    </h1>
                    {/*Our AI learns from your rental history, track rent, send automatic reminders,
                        manage tenants, and prepare for taxes*/}
                    {/*<div>*/}
                    {/*    <p className="text-primary-foreground tracking-wide">Created by:</p>*/}
                    {/*    <p className={"text-sm text-white/50"}>Daniel Kwakye: 202381843</p>*/}
                    {/*    <p className={"text-sm text-white/50"}>OluwaDamilola Oluwalowo: 202291411</p>*/}
                    {/*</div>*/}
                </div>


                <div className={"flex flex-col gap-8"}>
                    <AnimatedInView delay={0.5}>
                        <div className={"bg-white/10 p-4 rounded-lg"}>
                            <div className="flex items-start">

                                <div className={"w-[20%] md:w-auto"}>
                                    <div
                                        className=" h-10 w-10 flex  items-center justify-center rounded-full bg-white text-primary text-lg font-semibold mr-4">1
                                    </div>
                                </div>

                                <div className="w-full">
                                    <h3 className="text-white font-medium text-lg">Admin roles</h3>
                                    <p className="text-white/80 text-sm mt-1">Admin can add and update inventory, manage
                                        products and checkout for customer</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedInView>
                    <AnimatedInView delay={2 * 0.5}>
                        <div className={"bg-white/10 p-4 rounded-lg"}>
                            <div className="flex items-start">
                                <div className={"w-[20%] md:w-auto"}>
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary text-lg font-semibold mr-4">2
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-white font-medium text-lg">Customer role</h3>
                                    <p className="text-white/80 text-sm mt-1">Customer can shop for items and
                                        checkout</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedInView>

                </div>

            </div>
        </div>
    )
}

export default AuthIndexPage;