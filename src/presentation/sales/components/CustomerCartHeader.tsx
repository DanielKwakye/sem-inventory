import {useAppSelector} from "@/store";

function CustomerCartHeader() {

    const cart = useAppSelector(state => state.cart)

    return (
        <div className="flex flex-row justify-between">
            <h1 className="text-[#641713] font-bold">Cart <span className="">( {cart.totalQTy} )</span></h1>
        </div>
    )
}

export default CustomerCartHeader;