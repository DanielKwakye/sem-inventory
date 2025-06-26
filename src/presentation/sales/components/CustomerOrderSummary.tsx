import {useAppSelector} from "@/store";


function CustomerOrderSummary() {

    const cart = useAppSelector(state => state.cart)



    return (
        <div className="bg-[#f8f3f2] p-2 rounded-lg">
            <div className="divide-y divide-slate-200">
                <div className="flex justify-between items-center py-2">
                    <h1 className="font-bold text-sm">Order summary</h1>
                    <p className="text-xs text-slate-500">Amount</p>
                </div>
                <div className="py-2 space-y-1.5">
                    {
                        cart.items.map((item) => {
                            return (
                                <div className="flex justify-between items-center" key={item.id}>
                                    <h1 className="text-xs text-slate-500">{ item.product.title }</h1>
                                    <p className="text-xs text-slate-500">CAD ${item.product.selling_price}</p>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="py-2 space-y-1.5">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xs text-slate-500">Sub Total</h1>
                        <p className="text-xs text-slate-500">CAD ${cart.subTotalPrice.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-xs text-slate-500">Tax</h1>
                        <p className="text-xs text-slate-500">CAD ${cart.taxAmount.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-xs text-slate-500">Discount</h1>
                        <p className="text-xs text-green-500">- CAD ${cart.discountAmount.toFixed(2)}</p>
                    </div>

                </div>
                <div className="py-2 space-y-1.5">
                    <div className="flex justify-between items-center">
                        <h1 className="text-sm text-slate-500 font-bold">Total</h1>
                        <p className="text-lg font-bold">CAD ${cart.totalPrice.toFixed(2)}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default CustomerOrderSummary;