import {ShoppingBasket} from "lucide-react";
import type {ProductStockModel} from "@/lib/types";
import {getImageUrl} from "@/lib/utils.ts";
import {toast} from "sonner";
import {useAppDispatch} from "@/store";
import {cartSliceActions} from "@/store/cart-slice.ts";

type Props = {
    product: ProductStockModel
}

function CustomerProductItem({ product }: Props) {

    const dispatch = useAppDispatch()

    const addProductToCartHandler = () => {
        dispatch(cartSliceActions.emitCartEvent({ event: undefined }))
        dispatch(cartSliceActions.addToCart({ item: product}))
        toast(`${product.title} added to cart`, {
            position: "top-right",
        })
    }

    return (
        <div id={`customer-product-`+product.id} className={`rounded-lg aspect-square relative overflow-clip group`}>
            <img src={getImageUrl(product.image_path)} alt="product"
                 className={`object-contain w-full h-full absolute group-hover:scale-125 transition duration-500`} />
            <div className="bg-black/30 w-full h-full absolute"></div>
            <div className="absolute w-full h-full flex flex-col justify-between p-4 cursor-pointer" onClick={addProductToCartHandler}>

                <div className="flex justify-end">
                    <div
                        className="w-10 h-10 bg-white right-2 top-2 rounded-full flex justify-center items-center">
                        <ShoppingBasket size={14}/>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className={`flex flex-col`}>
                        <h1 className="font-bold text-white text-sm">{ product.title }</h1>
                        <p className={`text-sm text-white/80`}>{product.quantity} items available</p>
                    </div>
                    <div className="flex flex-col">
                        <p className={"text-white text-lg font-bold"}>CAD ${product.selling_price.toFixed(2)}</p>
                        {product.discount_perc > 0 && <p className="text-xs text-white/80">{product.discount_perc.toFixed(2)}% off</p>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CustomerProductItem;