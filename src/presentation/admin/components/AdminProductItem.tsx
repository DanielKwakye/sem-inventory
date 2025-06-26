import {getImageUrl} from "@/lib/utils.ts";
import {CheckIcon, MinusIcon, PlusIcon} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/store";
import {useCallback, useEffect, useRef, useState} from "react";
import type {ProductStockModel} from "@/lib/types";
import {adminSliceActions} from "@/store/admin-slice.ts";
import { apiUpdateStock} from "@/api/inventory_api.ts";

type Props = {
    product: ProductStockModel;
}

function AdminProductItem({ product: item }: Props ) {

    const initialised = useRef<boolean>(false)
    const [stockQty, setStockQty] = useState<number>(item.quantity)
    const adminState = useAppSelector(state => state.admin)
    const dispatch = useAppDispatch();
    const setSelectedProduct = useCallback((selectedProduct: ProductStockModel) => {
        dispatch(adminSliceActions.updateSelectedProduct({ product: selectedProduct }))
    },[])

    useEffect(() => {
        if( initialised.current ) {
            dispatch(adminSliceActions.emitProductEvent({ event: undefined }))
            apiUpdateStock(item.id, stockQty).then((data) => {
                console.log("returned data=", data)
                dispatch(adminSliceActions.emitProductEvent({ event: "product_updated" }))
            })
        }
        if(!initialised.current) {
            initialised.current = true
        }
    }, [stockQty])


    const addStockQuantity = useCallback(() => {
        setStockQty(prevState => {
            return  prevState + 1
        })
    },[])

    const subStockQuantity = useCallback(() => {
        setStockQty(prevState => {
            return prevState - 1
        })
    },[])

    return (
        <div className="w-full p-4 bg-white rounded-lg flex flex-row gap-2 cursor-pointer"
             onClick={() => setSelectedProduct(item)}>
            <div className="aspect-square w-[40%] rounded-lg overflow-clip">
                <img src={getImageUrl(item.image_path)} alt="product-eg"
                     className="w-full h-full object-cover"/>
            </div>
            <div className="w-full flex flex-col gap-2">
                <h2 className="text-[#641713] font-bold">{item.title}</h2>
                <div className="text-slate-500 text-md pb-1">
                    <p>CAD ${item.selling_price}</p>
                    <p className={"text-xs"}>cost price: CAD ${item.cost_price}</p>
                </div>
                <div className="flex justify-between">

                    <div className="flex flex-row gap-2 items-center">

                        <div
                            className="rounded-full w-8 h-8 bg-[#f8f3f9] flex justify-center items-center cursor-pointer"
                            onClick={subStockQuantity}
                        >
                            <MinusIcon size={14} className="text-[#641713]"/>
                        </div>
                        <div
                            className="rounded-full w-8 h-8 bg-[#f8f3f9] flex justify-center items-center"

                        >
                            <span className="text-[#641713] text-xs">{stockQty}</span>
                        </div>
                        <div
                            className="rounded-full w-8 h-8 bg-[#f8f3f9] flex justify-center items-center cursor-pointer"
                            onClick={addStockQuantity}
                        >
                            <PlusIcon size={14} className="text-[#641713]"/>
                        </div>

                    </div>

                    {
                        adminState.selectedProduct && (
                            adminState.selectedProduct.title == item.title && (
                                <div
                                    className="rounded-full w-8 h-8 bg-[#641713] flex justify-center items-center">
                                <CheckIcon size={14} className="text-white"/>
                                </div>
                            )
                        )
                    }


                </div>

            </div>
        </div>
    )
}

export default AdminProductItem;