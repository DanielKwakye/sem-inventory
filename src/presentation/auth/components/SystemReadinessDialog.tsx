
import {forwardRef, type Ref, useImperativeHandle, useState} from "react";
import {createPortal} from "react-dom";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog.tsx";
import {LoaderIcon} from "lucide-react";

export type ModalHandle = {
    open: () => void;
    close: () => void;
};

const SystemReadinessDialog = forwardRef((_, ref: Ref<ModalHandle | undefined>)=> {

    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                setOpen(true);
            },
            close: () => {
                setOpen(false);
            }
        }
    })

    return (
        createPortal(
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className={"text-red-500 inline-flex gap-1 items-center"}>
                            <LoaderIcon className={"animate-spin text-red-500"} />
                            <p className="ml-4 text-lg text-red-500 font-bold">Starting demo backend </p>
                        </AlertDialogTitle>
                        <AlertDialogDescription className={"text-sm text-foreground"}>
                            The Demo backend usually goes down after sometime of inactivity
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Alright</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            , document.getElementById('modal') as HTMLElement)
    )
})

export default SystemReadinessDialog;