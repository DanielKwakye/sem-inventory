import AddNewProduct from "@/presentation/admin/components/AddNewProduct.tsx";
import AnimatedInView from "@/components/custom/AnimatedInView.tsx";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import type {ProductStockModel} from "@/lib/types";
import {apiGetProducts} from "@/api/inventory_api.ts";
import {useAppDispatch, useAppSelector} from "@/store";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {useCallback, useEffect} from "react";
import {adminSliceActions} from "@/store/admin-slice.ts";
import AdminProductItem from "@/presentation/admin/components/AdminProductItem.tsx";

function AdminProducts() {

    const queryClient = useQueryClient();

    const adminState = useAppSelector(state => state.admin)
    const { selectedProduct, event: adminEvent } = useAppSelector(state => state.admin)
    const { isPending, data } = useQuery<ProductStockModel[]>({
        queryKey: ["fetch-admin-products"],
        queryFn: () => apiGetProducts(adminState.selectedProductCategory),
    })

    useEffect(() => {
        if(data && data.length > 0){
            const updatedProduct = selectedProduct ? data.find(e =>  e.id == selectedProduct?.id) : data[0]
            if(updatedProduct) {
                setSelectedProduct(updatedProduct)
            }else {
                setSelectedProduct(data[0])
            }

        }
    }, [data])

    useEffect(() => {
        if(adminEvent) {
            const shouldRefresh = ["product_added", "product_updated", "product_removed"].includes(adminEvent)
            if(shouldRefresh) {
                refreshProducts()
            }
        }
    }, []);

    useEffect(() => {
        refreshProducts()
    }, []);

    const refreshProducts = () => {
        queryClient.invalidateQueries({ queryKey: ['fetch-admin-products' ] }).catch((error) => {
            console.log("error syncing records: ", error.message)
        });
    }

    const dispatch = useAppDispatch();
    const setSelectedProduct = useCallback((selectedProduct: ProductStockModel) => {
        dispatch(adminSliceActions.updateSelectedProduct({ product: { ...selectedProduct } }))
    },[])

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ['fetch-admin-products' ] }).catch(console.error);
    }, [adminState.selectedProductCategory])


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
                                <AdminProductItem product={item} />
                            </AnimatedInView>

                        );
                    })
                }
            </div>
        </div>
    )
}

export default AdminProducts;