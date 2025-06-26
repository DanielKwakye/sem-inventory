import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {EditIcon, LoaderCircle} from "lucide-react";
import {apiErrorsHandler, formErrorsHandler} from "@/lib/utils.ts";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import type {ProductStockModel, ProductStockModelForm} from "@/lib/types";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "@/store";
import {useMutation} from "@tanstack/react-query";
import {apiUpdateProduct} from "@/api/inventory_api.ts";
import {toast} from "sonner";
import {useState} from "react";
import {adminSliceActions} from "@/store/admin-slice.ts";

type Props = {
    product: ProductStockModel
}

function EditProduct({ product }: Props) {

    const dispatch = useAppDispatch();
    const category = useAppSelector(state => state.admin.selectedProductCategory)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductStockModelForm>()
    const [open, setOpen] = useState(false);

    const submitHandler = (data: ProductStockModelForm) => {
        dispatch(adminSliceActions.emitProductEvent({ event: undefined }))
        mutate(data)
    }

    const { mutate, isPending } = useMutation({
        mutationKey: ['add-product'],
        mutationFn: (data: ProductStockModelForm) => apiUpdateProduct(product.id, data),
        onSuccess: () => {
            toast("Product updated successfully!");
            dispatch(adminSliceActions.emitProductEvent({ event: "product_updated"}))
            setOpen(false);
        },
        onError: apiErrorsHandler
    })

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="flex py-2 px-3 bg-white rounded-full gap-2 cursor-pointer">
                    <EditIcon size={14}/>
                    <span className="text-xs">Edit product</span>
                </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">

                <DialogHeader>
                    <DialogTitle>Edit Product ({category})</DialogTitle>
                    <DialogDescription>
                    Category: { category }
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(submitHandler, formErrorsHandler)}>
                    <div className="grid gap-4">

                        <div className="grid gap-3">
                            <Label htmlFor="title">Product name</Label>
                            <div className={"space-y-1"}>
                                <Input id="title" placeholder="eg. Black Iphone 16+"  {...register('title', {
                                    required: "Title is required",
                                })} defaultValue={product.title} />
                                {errors.title && (<div className={"text-xs text-red-700"}>{errors.title.message}</div>)}
                            </div>
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="cost_price">Cost price</Label>
                            <Input type={"number"} id="cost_price"
                                   placeholder={"eg. 21.00"} {...register("cost_price")} step={".01"}
                                   defaultValue={product.cost_price}
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="selling_price">Selling price</Label>
                            <Input type={"number"} id="selling_price"
                                   step={".01"}
                                   placeholder={"eg. 29.99"} {...register("selling_price", { required: "Field is required"})}
                                defaultValue={product.selling_price}
                            />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="tax_value">Tax value ($)</Label>
                            <Input type={"number"} id="tax_value" placeholder={"eg. 2.50"} step={".01"} {...register("tax_value", { required: "Field is required"})}
                                defaultValue={product.tax_value}
                            />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="discount_perc">Discount (%)</Label>
                            <Input type={"number"} id="discount_perc"
                                   placeholder={"eg. 15.0"} step={".01"} {...register("discount_perc", { required: "Field is required"})} defaultValue={product.discount_perc} />
                        </div>

                    </div>
                    <div className={"flex mt-8 gap-3 justify-end"}>
                        <DialogClose asChild>
                            <Button type={"button"} variant="outline">Close</Button>
                        </DialogClose>

                        <Button type="submit" disabled={isPending}>
                            <span>Update</span>
                            {isPending && (<LoaderCircle size={14} className={"animate-spin"}/>)}
                        </Button>
                    </div>
                </form>
            </DialogContent>

        </Dialog>
    )
}

export default EditProduct