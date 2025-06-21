import {CheckIcon, LucideTrash2, MinusIcon, PlusIcon, ReceiptIcon} from "lucide-react";
import {
    laptopCategoryRef,
    phoneCategoryRef,
    productExampleImg2,
    shirtCategoryRef,
    shoeCategoryRef
} from "@/assets";
import {Button} from "@/components/ui/button.tsx";
import AnimatedInView from "@/components/custom/AnimatedInView.tsx";

function SalesIndexPage() {
    const categorySelected = false
    return (
        <div className="grid grid-cols-3 gap-2 h-full bg-[#f8f3f9]">
            <div
                className="rounded-lg h-full space-y-4 overflow-y-auto col-span-2 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent">

                {/* Categories Section*/}
                <div className="bg-white rounded-lg space-y-4 p-4">

                    <div className="rounded-lg">
                        <div className="flex flex-row justify-between">
                            <h1 className="text-[#641713] font-bold">Product Categories</h1>
                            <div className="flex py-2 px-3 bg-white rounded-full gap-2 items-center">
                                <span className="text-xs">Shoes</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 ">
                        <AnimatedInView key={"item-1"} delay={0.05}>
                            <div className="bg-[#f8f3f9] aspect-square rounded-lg relative">
                                <div className="absolute p-4 flex flex-col justify-between items-center w-full h-full">
                                    <img src={shoeCategoryRef} alt="shoes" className="object-cover w-full h-full"/>
                                </div>
                                <div
                                    className="absolute w-10 h-10 bg-white right-2 top-2 rounded-full flex justify-center items-center">
                                    <CheckIcon size={14}/>
                                </div>
                            </div>
                        </AnimatedInView>

                        <AnimatedInView key={"item-1"} delay={2 * 0.05}>
                            <div className="bg-[#f8f3f9] aspect-square rounded-lg relative">
                                <div className="absolute p-4 flex flex-col justify-between items-center w-full h-full">
                                    <img src={phoneCategoryRef} alt="shoes" className="object-cover w-full h-full"/>
                                </div>
                                {
                                    categorySelected && (
                                        <div
                                            className="absolute w-10 h-10 bg-white right-2 top-2 rounded-full flex justify-center items-center">
                                            <CheckIcon size={14}/>
                                        </div>
                                    )
                                }

                            </div>
                        </AnimatedInView>

                        <AnimatedInView key={"item-1"} delay={3 * 0.05}>
                            <div className="bg-[#f8f3f9] aspect-square rounded-lg relative">
                                <div className="absolute p-4 flex flex-col justify-between items-center w-full h-full">
                                    <img src={shirtCategoryRef} alt="shoes"
                                         className="object-cover w-full h-full"/>
                                </div>
                                {
                                    categorySelected && (
                                        <div
                                            className="absolute w-10 h-10 bg-white right-2 top-2 rounded-full flex justify-center items-center">
                                            <CheckIcon size={14}/>
                                        </div>
                                    )
                                }
                            </div>
                        </AnimatedInView>

                        <AnimatedInView key={"item-1"} delay={4 * 0.05}>
                            <div className="bg-[#f8f3f9] aspect-square rounded-lg relative">
                                <div className="absolute p-4 flex flex-col justify-between items-center w-full h-full">
                                    <img src={laptopCategoryRef} alt="shoes" className="object-cover w-full h-full"/>
                                </div>
                                {
                                    categorySelected && (
                                        <div
                                            className="absolute w-10 h-10 bg-white right-2 top-2 rounded-full flex justify-center items-center">
                                            <CheckIcon size={14}/>
                                        </div>
                                    )
                                }
                            </div>
                        </AnimatedInView>


                    </div>

                </div>
                {/* End of Categories Section*/}

                {/* Products Section   */}
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

                    <div className="grid grid-cols-2 gap-2 ">
                        {
                            Array.from({length: 4}).map((_, index) => {
                                const delay = index * 0.05; // Optional stagger effect

                                return (
                                    <AnimatedInView key={"item-" + index} delay={delay}>
                                        <div className="rounded-lg aspect-square relative overflow-clip">
                                            <img src={productExampleImg2} alt="product"
                                                 className="object-cover w-full h-full absolute"/>
                                            <div className="bg-black/30 w-full h-full absolute"></div>
                                            <div className="absolute w-full h-full flex flex-col justify-between p-4">

                                                <div className="flex justify-end">
                                                    <div
                                                        className="w-10 h-10 bg-white right-2 top-2 rounded-full flex justify-center items-center">
                                                        <PlusIcon size={14}/>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between items-center">
                                                    <div className="flex flex-col">
                                                        <h1 className="font-bold text-white text-sm">Green Apple Shoe</h1>
                                                        <p className="text-xs text-white/50">added June 07, 2025</p>
                                                    </div>
                                                    <p className="text-white text-lg font-bold">
                                                        CAD $32
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </AnimatedInView>
                                )

                            })
                        }
                    </div>

                </div>

                {/* End of Products Section   */}

            </div>

            <div className="bg-white p-5 rounded-lg h-full space-y-4 overflow-y-auto">

                <div className="flex flex-row justify-between">
                    <h1 className="text-[#641713] font-bold">Cart <span className="">( 3 )</span></h1>
                </div>

                <div className="flex flex-col gap-2">

                    {/* Cart */}

                    {
                        Array.from({length: 3}).map((_) => {
                            return (
                                <div className="border border-slate-100 rounded-lg flex flex-row p-2 gap-2">
                                    <div className="aspect-square w-[30%] rounded-lg overflow-clip">
                                        <img src={productExampleImg2} alt="prdouct"
                                             className="object-cover w-full h-full"/>
                                    </div>
                                    <div className="w-full flex flex-col gap-2">
                                        <div>
                                            <h1 className="font-bold">Lenovo ultra</h1>
                                            <p className="text-xs text-slate-500">CAD $50</p>
                                        </div>
                                        <div className="flex flex-row justify-end">
                                            <div
                                                className="flex justify-end rounded-full gap-2 items-center bg-[#f8f3f2]">
                                            <div className="">
                                                    <Button size={'sm'} variant={'ghost'}><MinusIcon size={14}/></Button>
                                                </div>
                                                <p className="text-xs">4</p>
                                                <div className="">
                                                    <Button size={'sm'}  variant={'ghost'}><PlusIcon size={14}/></Button>
                                                </div>
                                            </div>
                                            <Button size={'sm'}  variant={'ghost'}><LucideTrash2 size={14} /></Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                {/*    End of Cart */}

                {/*    Order summary */}
                    <div className="bg-[#f8f3f2] p-2 rounded-lg">
                        <div className="divide-y divide-slate-200">
                            <div className="flex justify-between items-center py-2">
                                <h1 className="font-bold text-sm">Order summary</h1>
                                <p className="text-xs text-slate-500">Amount</p>
                            </div>
                            <div className="py-2 space-y-1.5">
                                {
                                    Array.from({length: 2}).map((_) => {
                                        return (
                                            <div className="flex justify-between items-center">
                                                <h1 className="text-xs text-slate-500">Lenovo Ultra</h1>
                                                <p className="text-xs text-slate-500">CAD $20</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="py-2 space-y-1.5">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-xs text-slate-500">Sub Total</h1>
                                    <p className="text-xs text-slate-500">CAD $20</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="text-xs text-slate-500">Tax</h1>
                                    <p className="text-xs text-slate-500">CAD $5</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h1 className="text-xs text-slate-500">Donate for poor</h1>
                                    <p className="text-xs text-slate-500">CAD $0</p>
                                </div>

                            </div>
                            <div className="py-2 space-y-1.5">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-sm text-slate-500 font-bold">Total</h1>
                                    <p className="text-xs font-bold">CAD $20</p>
                                </div>


                            </div>
                        </div>
                    </div>
                {/*    End of Order summary */}

                    <Button>
                        <ReceiptIcon />
                        <span>Place Order</span>
                    </Button>

                </div>

            </div>

        </div>
    )
}

export default SalesIndexPage