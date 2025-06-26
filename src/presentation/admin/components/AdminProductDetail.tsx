import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useAppDispatch, useAppSelector} from "@/store";
import {apiErrorsHandler, formErrorsHandler, getImageUrl} from "@/lib/utils.ts";
import AnimatedInView from "@/components/custom/AnimatedInView.tsx";
import EditProduct from "@/presentation/admin/components/EditProduct.tsx";
import type {ProductStockModelForm} from "@/lib/types";
import {useMutation} from "@tanstack/react-query";
import {apiUpdateProduct} from "@/api/inventory_api.ts";
import {toast} from "sonner";
import {useForm} from "react-hook-form";
import {LoaderCircle} from "lucide-react";
import {adminSliceActions} from "@/store/admin-slice.ts";

function AdminProductDetail() {

    const dispatch = useAppDispatch();
    const selectedProduct = useAppSelector(state => state.admin.selectedProduct)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProductStockModelForm>()

    const submitHandler = (data: ProductStockModelForm) => {
        const payload:ProductStockModelForm  = { ...(selectedProduct!), discount_perc: data.discount_perc }
        dispatch(adminSliceActions.emitProductEvent({ event: undefined }))
        mutate(payload)
    }

    const { mutate, isPending } = useMutation({
        mutationKey: ['add-product'],
        mutationFn: (data: ProductStockModelForm) => apiUpdateProduct(selectedProduct!.id, data),
        onSuccess: () => {
            toast("Product updated successfully!");
            dispatch(adminSliceActions.emitProductEvent({ event: "product_updated"}))
            reset()
        },
        onError: apiErrorsHandler
    })

    return (
        <>
            {selectedProduct && (
                <div className="bg-[#f8f3f9] p-5 rounded-lg h-full space-y-4 overflow-y-auto">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-[#641713] font-bold">Product details</h1>
                        <EditProduct key={selectedProduct.id} product={ selectedProduct } />
                    </div>
                    <AnimatedInView delay={0.01}>
                        <div className={"w-full bg-white aspect-video overflow-clip rounded-lg cursor-pointer"}>
                            <img src={getImageUrl(selectedProduct.image_path)} alt="Product image"
                                 className={"w-full h-full object-cover hover:scale-125 transition duration-500"} />
                        </div>
                    </AnimatedInView>
                    <AnimatedInView delay={2 * 0.01}>
                        <div className="w-full p-4 bg-white rounded-lg flex flex-col gap-4">
                            <div className="flex flex-row justify-between">
                                <h1 className="font-bold text-[#641713] text-sm flex-1">Product title</h1>
                                <p className="text-sm flex-1 text-right"> {selectedProduct.title} </p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <h1 className="font-bold text-[#641713] text-sm flex-1">Quantity</h1>
                                <p className="text-sm flex-1 text-right"> {selectedProduct.quantity} </p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <h1 className="font-bold text-[#641713] text-sm flex-1">Selling Price</h1>
                                <p className="text-sm flex-1 text-right"> CAD {selectedProduct.selling_price.toFixed(2)}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <h1 className="font-bold text-[#641713] text-sm flex-1">Cost Price</h1>
                                <p className="text-sm flex-1 text-right"> CAD {selectedProduct.cost_price.toFixed(2)}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <h1 className="font-bold text-[#641713] text-sm flex-1">Discount</h1>
                                <p className="text-sm flex-1 text-right"> {selectedProduct.discount_perc.toFixed(2)}% </p>
                            </div>
                        </div>
                    </AnimatedInView>
                    <form onSubmit={handleSubmit(submitHandler, formErrorsHandler)}>
                        <AnimatedInView delay={3 * 0.01}>
                            <div className="w-full p-4 bg-white rounded-lg flex flex-col gap-2">
                            <label htmlFor="discount" className="text-sm">Set new discount (%)</label>
                                <div className={"space-y-1"}>
                                    <Input type="number" placeholder="Discount" step={".01"} { ...register("discount_perc", {
                                        required: "Field is required"
                                    })} />
                                    { errors.discount_perc && (<p className={"text-xs text-red-700"}>{errors.discount_perc.message}</p>)}
                                </div>
                                <div>
                                    <Button type="submit" disabled={isPending}>
                                        <span className="text-sm">Save discount</span>
                                        {isPending && (<LoaderCircle size={14} className={"animate-spin"}/>)}
                                    </Button>
                                </div>
                            </div>
                        </AnimatedInView>
                    </form>
                </div>
            )}
        </>
    )
}

export default AdminProductDetail