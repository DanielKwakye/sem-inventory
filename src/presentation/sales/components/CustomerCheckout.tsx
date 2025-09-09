import {Button} from "@/components/ui/button.tsx";
import {CheckCircle2Icon, LoaderCircleIcon, ReceiptIcon, ShoppingCartIcon} from "lucide-react";
import CustomerOrderSummary from "@/presentation/sales/components/CustomerOrderSummary.tsx";
import CustomerCart from "@/presentation/sales/components/CustomerCart.tsx";
import {useAppDispatch, useAppSelector} from "@/store";
import {cartSliceActions} from "@/store/cart-slice.ts";
import {toast} from "sonner";
import {useMutation} from "@tanstack/react-query";
import {apiCheckout} from "@/api/inventory_api.ts";
import {apiErrorsHandler} from "@/lib/utils.ts";
import {useEffect} from "react";
import AnimatedInView from "@/components/custom/AnimatedInView.tsx";

function CustomerCheckout() {

    const dispatch = useAppDispatch()
    const { items: cartItems, totalPrice, event } = useAppSelector(state => state.cart)

    useEffect(() => {
        if(event) {
            if(event == "item_exceeded") {
                toast("Can not exceeded available items in stock", {
                    position: "top-right",
                })
            }
        }
    }, [event])

    const { mutate, isPending } = useMutation({
        mutationKey: ['add-product'],
        mutationFn: (data: { product_id: number, quantity:number }[]) => apiCheckout(data),
        onSuccess: () => {
            dispatch(cartSliceActions.clearCart())
            dispatch(cartSliceActions.emitCartEvent({ event: "checkout_completed" }))
            toast("Order successfully completed successfully.", {
                position: "top-right",
                className: "bg-[#f8f3f2] space-x-1",
                icon: <CheckCircle2Icon size={14} />,
            })
        },
        onError: apiErrorsHandler
    })


    if (cartItems.length === 0) {
        return (
            <div className="border border-slate-100 rounded-lg p-4 flex flex-row gap-2 bg-slate-100">
                <ShoppingCartIcon size={10} className={"text-muted-foreground"}  />
                <span className={"text-xs text-muted-foreground"}>Cart is empty</span>
            </div>
        )
    }


    const checkoutHandler = () => {
        dispatch(cartSliceActions.emitCartEvent({ event: undefined }))
        const payload: { product_id: number, quantity:number }[] = cartItems.map((item) => {
            return {
               product_id: item.id,
               quantity: item.quantity,
            }
        })
        mutate(payload)
    }

    return (
        <div className="flex flex-col gap-2">

            {/* Cart */}

            <AnimatedInView key={"item-cart"} delay={0.01}>
                <CustomerCart />
            </AnimatedInView>


            {/*    End of Cart */}

            {/*    Order summary */}
            <AnimatedInView key={"item-order-summary"} delay={2 * 0.01}>
                <CustomerOrderSummary />
            </AnimatedInView>
            {/*    End of Order summary */}


            <AnimatedInView key={"item-place-order-buttons"} delay={3 * 0.01}>
                <Button id={"place-order-button"} onClick={checkoutHandler} disabled={isPending}>
                    {isPending ? (<LoaderCircleIcon className={"animate-spin"} />) : (<ReceiptIcon/>)}
                    <span>Place Order | CAD ${totalPrice.toFixed(2)} </span>
                </Button>
            </AnimatedInView>


        </div>
    )
}

export default CustomerCheckout;