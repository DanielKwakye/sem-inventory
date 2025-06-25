import AddNewProduct from "@/presentation/admin/components/AddNewProduct.tsx";
import AnimatedInView from "@/components/custom/AnimatedInView.tsx";
import {CheckIcon, MinusIcon, PlusIcon} from "lucide-react";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import type {ProductStockModel} from "@/lib/types";
import {apiGetProducts} from "@/api/inventory_api.ts";
import {useAppDispatch, useAppSelector} from "@/store";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {getImageUrl} from "@/lib/utils.ts";
import {useCallback, useEffect} from "react";
import {adminSliceActions} from "@/store/admin-slice.ts";

function AdminProducts() {

    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();
    const adminState = useAppSelector(state => state.admin)
    const { isPending, data } = useQuery<ProductStockModel[]>({
        queryKey: ["fetch-admin-products"],
        queryFn: () => apiGetProducts(adminState.selectedProductCategory),
    })

    useEffect(() => {
        if(data && data.length > 0){
            setSelectedProduct(data[0])
        }
    }, [data])

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ['fetch-admin-products' ] }).catch(console.error);
    }, [adminState.selectedProductCategory])

    const setSelectedProduct = useCallback((selectedProduct: ProductStockModel) => {
        dispatch(adminSliceActions.updateSelectedProduct({ product: selectedProduct }))
    },[])

    return (
        <div className="bg-[#f8f3f9] p-5 rounded-lg h-full space-y-4 overflow-y-auto">
            <div className="flex flex-row justify-between">
                <h1 className="text-[#641713] font-bold">Products</h1>
                <AddNewProduct/>
            </div>
            <div className="flex flex-col gap-2">
                {
                     isPending && Array.from({ length: 4 }).map((_, index) => (
                         <Skeleton key={"item-" + index} className="w-full h-[50px] bg-[#e9ecfa]" />
                    ))
                }

                {
                    data && data.map((item, index) => {
                        const delay = index * 0.01; // Optional stagger effect
                        return (
                            <AnimatedInView key={"item-" + item.id} delay={delay}>
                                <div className="w-full p-4 bg-white rounded-lg flex flex-row gap-2 cursor-pointer" onClick={() => setSelectedProduct(item)}>
                                    <div className="aspect-square w-[40%] rounded-lg overflow-clip">
                                        <img src={getImageUrl(item.image_path)} alt="product-eg"
                                             className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="w-full flex flex-col gap-2">
                                        <h2 className="text-[#641713] font-bold">{item.title}</h2>
                                        <p className="text-slate-500 text-xs">Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipisicing elit. Distinctio, sint!
                                        </p>
                                        <div className="flex justify-between">

                                            <div className="flex flex-row gap-2 items-center">
                                                <div
                                                    className="rounded-full w-8 h-8 bg-[#f8f3f9] flex justify-center items-center">
                                                    <PlusIcon size={14} className="text-[#641713]"/>
                                                </div>
                                                <div
                                                    className="rounded-full w-8 h-8 bg-[#f8f3f9] flex justify-center items-center">
                                                    <span className="text-[#641713] text-xs">20</span>
                                                </div>
                                                <div
                                                    className="rounded-full w-8 h-8 bg-[#f8f3f9] flex justify-center items-center">
                                                    <MinusIcon size={14} className="text-[#641713]"/>
                                                </div>
                                            </div>

                                            {
                                                index === 0 && (
                                                    <div
                                                        className="rounded-full w-8 h-8 bg-[#641713] flex justify-center items-center">
                                                        <CheckIcon size={14} className="text-white"/>
                                                    </div>
                                                )
                                            }


                                        </div>

                                    </div>
                                </div>
                            </AnimatedInView>

                        );
                    })
                }
            </div>
        </div>
    )
}

export default AdminProducts;