import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {LoaderCircle, PlusCircleIcon} from "lucide-react";
import {useForm} from "react-hook-form";
import {apiErrorsHandler, formErrorsHandler} from "@/lib/utils.ts";
import type { ProductStockModelForm} from "@/lib/types";
import {useMutation} from "@tanstack/react-query";
import {apiAddNewProduct} from "@/api/inventory_api.ts";
import {toast} from "sonner";

function AddNewProduct() {

    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors },
    } = useForm<ProductStockModelForm>()

    const submitHandler = (data: ProductStockModelForm) => {
        const formData = new FormData();
        if(!data.image) {
            setError("image", { message: "Please upload a image"})
            return;
        }
        formData.append("image", data.image);
        formData.append("title", data.title);
        formData.append("cost_price", String(data.cost_price));
        formData.append("selling_price", String(data.selling_price));
        formData.append("tax_value", String(data.tax_value));
        formData.append("discount_perc", String(data.discount_perc));
        mutate(formData)
    }

    const { mutate, isPending } = useMutation({
        mutationKey: ['add-product'],
        mutationFn: (formData: FormData) => apiAddNewProduct(formData),
        onSuccess: () => {
            toast("Product added successfully!");
            reset()
        },
        onError: apiErrorsHandler
    })

    return <Dialog>
        <form  onSubmit={handleSubmit(submitHandler, formErrorsHandler)}>
            <DialogTrigger asChild>
                <div className="flex py-2 px-3 bg-white rounded-full gap-2 items-center cursor-pointer">
                    <PlusCircleIcon size={14}/>
                    <span className="text-xs">Add new product</span>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add new product</DialogTitle>
                    <DialogDescription>
                        create a new product and specify the quantity available
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="image">Product image</Label>
                        <Input id="image" type="file"/>
                        { errors.image && (<div className={"text-xs text-red-700"}>{ errors.image.message }</div>)}
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="title">Product name</Label>
                        <Input id="title" placeholder="eg. Black Iphone 16+"  {...register('title')} />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="cost_price">Cost price</Label>
                        <Input type={"number"} id="cost_price" placeholder={"eg. 21.00"} {...register("cost_price")} />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="selling_price">Selling price</Label>
                        <Input type={"number"} id="selling_price" placeholder={"eg. 29.99"} {...register("selling_price")} />
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="tax_value">Tax value ($)</Label>
                        <Input type={"number"} id="tax_value" placeholder={"eg. 2.50"} {...register("tax_value")} />
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="discount_perc">Discount (%)</Label>
                        <Input type={"number"} id="discount_perc" placeholder={"eg. 15.0"} {...register("discount_perc")} />
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input type={"number"} id="quantity" placeholder={"eg. 15"} {...register("quantity")} />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" disabled={isPending}>
                        <span>Save changes</span>
                        { isPending && (<LoaderCircle size={14} className={"animate-spin"}/>) }
                    </Button>
                </DialogFooter>
            </DialogContent>
        </form>
    </Dialog>
}

export default AddNewProduct;
