import {Button} from "@/components/ui/button.tsx";
import {LucideTrash2, MinusIcon, PlusIcon} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/store";
import type {ProductStockModel} from "@/lib/types";
import {cartSliceActions} from "@/store/cart-slice.ts";
import {getImageUrl} from "@/lib/utils.ts";


function CustomerCart() {

    const dispatch = useAppDispatch()
    const cartItems = useAppSelector(state => state.cart.items)

    const addToCartHandler = (product: ProductStockModel) => {
        dispatch(cartSliceActions.emitCartEvent({ event: undefined }))
        dispatch(cartSliceActions.addToCart({ item: product }))
    }
    const reduceCartItemHandler = (product: ProductStockModel) => {
        dispatch(cartSliceActions.emitCartEvent({ event: undefined }))
        dispatch(cartSliceActions.reduceCartItem({ item: product }))
    }
    const removeCartItemHandler = (product: ProductStockModel) => {
        dispatch(cartSliceActions.emitCartEvent({ event: undefined }))
        dispatch(cartSliceActions.removeCartItem({ item: product }))
    }

    return (
        <>
            {
                cartItems.map((cartItem) => {
                    return (
                        <div key={cartItem.id} className="border border-slate-100 rounded-lg flex flex-row p-2 gap-2">
                            <div className="aspect-square w-[30%] rounded-lg overflow-clip">
                                <img src={getImageUrl(cartItem.product.image_path)} alt="prdouct"
                                     className="object-cover w-full h-full"/>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <div>
                                    <h1 className="font-bold">{ cartItem.product.title }</h1>
                                    <p className="text-md text-slate-500">CAD ${cartItem.product.selling_price}</p>
                                    <p className="text-xs text-red-500">{cartItem.product.quantity} item(s) available</p>
                                </div>
                                <div className="flex flex-row justify-end">
                                    <div
                                        className="flex justify-end rounded-full gap-2 items-center bg-[#f8f3f2] overflow-clip cursor-pointer">
                                        <div className="">
                                            <Button className="cursor-pointer" onClick={() => reduceCartItemHandler(cartItem.product)} size={'sm'} variant={'ghost'}><MinusIcon size={14}/></Button>
                                        </div>
                                        <p className="text-xs">{cartItem.quantity}</p>
                                        <div className="">
                                            <Button className={"cursor-pointer"} onClick={() => addToCartHandler(cartItem.product)} size={'sm'} variant={'ghost'}><PlusIcon size={14}/></Button>
                                        </div>
                                    </div>
                                    <Button onClick={() => removeCartItemHandler(cartItem.product)} size={'sm'} variant={'ghost'}><LucideTrash2 size={14}/></Button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CustomerCart