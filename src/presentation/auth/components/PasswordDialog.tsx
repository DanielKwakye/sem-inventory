import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {adminProfilePic} from "@/assets";
import {useForm} from "react-hook-form";
import {formErrorsHandler} from "@/lib/utils.ts";

type Props = {
    onLoginSuccess?: () => void,
}

export function PasswordDialog({ onLoginSuccess }: Props) {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<{ password: string }>()

    const submitHandler = () => {
        if ( onLoginSuccess ) {
            onLoginSuccess()
        }

    }

    return (
        <Dialog onOpenChange={(open) => {
            if(open) {
                reset()
            }
        }}>
            <form>
                <DialogTrigger asChild>
                    <div className={"aspect-square rounded p-4 flex flex-col gap-8 w-full bg-slate-100 cursor-pointer"}>
                        <div className="w-8 h-8 rounded-full overflow-clip">
                            <img src={adminProfilePic} alt="profile pic"
                                 className="w-full h-full object-cover"/>
                        </div>
                        <div className={"flex justify-center"}>
                            Admin
                        </div>

                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Login As Admin</DialogTitle>
                        <DialogDescription>
                           Password is <strong className={"text-lg"}>"123456"</strong> for demo purposes
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(submitHandler, formErrorsHandler)}>
                        <div className="grid gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="password">Enter Password</Label>
                                <div className={"space-y-1"}>
                                    <Input
                                        id="password"
                                        placeholder="Enter password here"
                                        {...register("password", {
                                            required: "This field is required",
                                            validate: (value) =>
                                                value === "123456" || "Password must be 123456",
                                            }
                                        )}
                                    />
                                    {errors.password && (<div className={"text-xs text-red-700"}>{errors.password.message}</div>)}
                                </div>
                            </div>
                        </div>
                        <div className={"flex mt-8 gap-3 justify-end"}>
                            <DialogClose asChild>
                                <Button type={"button"} variant="outline">Close</Button>
                            </DialogClose>

                            <Button type="submit" >
                                <span>Login</span>
                            </Button>
                        </div>
                    </form>

                </DialogContent>
            </form>
        </Dialog>
    )
}

export default PasswordDialog