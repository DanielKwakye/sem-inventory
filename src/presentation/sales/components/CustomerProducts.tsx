import AnimatedInView from "@/components/custom/AnimatedInView.tsx";
import CustomerProductItem from "@/presentation/sales/components/CustomerProductItem.tsx";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import type {ProductStockModel} from "@/lib/types";
import {apiGetProducts} from "@/api/inventory_api.ts";
import {useAppSelector} from "@/store";
import {useEffect} from "react";

function CustomerProducts() {


    const queryClient = useQueryClient();
    const { selectedProductCategory } = useAppSelector(state => state.customer)
    const { event } = useAppSelector(state => state.cart)
    const { isPending, data } = useQuery<ProductStockModel[]>({
        queryKey: ["fetch-customer-products"],
        queryFn: () => apiGetProducts(selectedProductCategory),
    })

    useEffect(() => {
        if(event) {
            if(event == "checkout_completed") {
                refreshProducts()
            }
        }
    }, [event])

    useEffect(() => {
        refreshProducts()
    }, [selectedProductCategory])

    const refreshProducts = () => {
        queryClient.invalidateQueries({ queryKey: ['fetch-customer-products' ] }).catch(console.error);
    }


    const filteredProducts = data?.filter(item => item.quantity > 0) || []

    return (
        <div className="bg-white rounded-lg space-y-4 p-4">

            <div className="rounded-lg">
                <div className="flex flex-row justify-between">
                    <h1 className="text-[#641713] font-bold">Shoes</h1>
                    {/*<div className="flex py-2 px-3 bg-white rounded-full gap-2 items-center">*/}
                    {/*    <PlusCircleIcon size={14}/>*/}
                    {/*    <span className="text-xs">Add new product</span>*/}
                    {/*</div>*/}
                </div>
            </div>

            {
                isPending && (<div className={"py-4"}>
                                <p>Fetching items ....</p>
                            </div>)
            }

            <div className="grid grid-cols-2 gap-2 ">
                {
                    filteredProducts.map((product, index) => {
                        const delay = index * 0.05; // Optional stagger effect

                        return (
                            <AnimatedInView key={"item-" + product.id} delay={delay}>
                                <CustomerProductItem product={product} />
                            </AnimatedInView>
                        )

                    })
                }
            </div>

        </div>
    )
}

export default CustomerProducts