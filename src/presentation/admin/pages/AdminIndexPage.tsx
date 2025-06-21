import {productExampleImg} from "@/assets";
import {categories} from "@/lib/constants.ts";
import {Badge} from "@/components/ui/badge.tsx";
import {CheckIcon, EditIcon, MinusIcon, PlusCircleIcon, PlusIcon} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import AnimatedInView from "@/components/custom/AnimatedInView.tsx";

function AdminIndexPage() {
    return (
        <div className="columns-3 gap-2 h-full">
            {/*  Categories section  */}
            <div className="bg-[#f8f3f9] p-5 rounded-lg h-full space-y-4 overflow-y-auto">
                <div className="flex flex-row justify-between">
                    <h1 className="text-[#641713] font-bold">Categories</h1>
                    <div className="flex py-2 px-3 bg-white rounded-full">
                        <span className="text-xs">4 Categories</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {
                        categories.map(( category, index) => {
                            const delay = index * 0.05; // Optional stagger effect

                            const Icon = category.icon
                            return (
                                <AnimatedInView key={"item-" + index} delay={delay}>
                                    <div
                                        className="aspect-square bg-white rounded-lg p-2 flex flex-col justify-between">
                                        <div className="flex justify-end">
                                            <Badge
                                                className={`rounded-full ${index == 0 ? 'bg-[#641713]' : 'bg-[#e9ecfa]'} ${index == 0 ? 'text-white' : 'text-slate-500'}`}>
                                                {index == 0 && (<CheckIcon/>)}
                                                <span>{index === 0 ? 'Selected' : 'not selected'}</span>
                                            </Badge>
                                        </div>
                                        <div className="flex justify-center">
                                            <div
                                                className="rounded-full w-10 h-10 bg-[#f8f3f9] flex justify-center items-center">
                                                <Icon size={14}/>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <span className="text-[#641713] text-sm">{category.title}</span>
                                        </div>
                                    </div>
                                </AnimatedInView>

                            );
                        })
                    }
                </div>
            </div>
            {/*  End of Categories section  */}

            {/*  Products section  */}
            <div className="bg-[#f8f3f9] p-5 rounded-lg h-full space-y-4 overflow-y-auto">
                <div className="flex flex-row justify-between">
                    <h1 className="text-[#641713] font-bold">Products</h1>
                    <div className="flex py-2 px-3 bg-white rounded-full gap-2 items-center">
                        <PlusCircleIcon size={14}/>
                        <span className="text-xs">Add new product</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {
                        Array.from({length: 5}).map((_, index) => {
                            const delay = index * 0.05; // Optional stagger effect
                            return (
                                <AnimatedInView key={"item-" + index} delay={delay}>
                                    <div className="w-full p-4 bg-white rounded-lg flex flex-row gap-2">
                                        <div className="aspect-square w-[40%] rounded-lg overflow-clip">
                                            <img src={productExampleImg} alt="product-eg"
                                                 className="w-full h-full object-cover"/>
                                        </div>
                                        <div className="w-full flex flex-col gap-2">
                                            <h2 className="text-[#641713] font-bold">Lenovo Laptop 2GB Ram</h2>
                                            <p className="text-slate-500 text-xs">Lorem ipsum dolor sit amet,
                                                consectetur
                                                adipisicing elit. Distinctio, sint!</p>

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
            {/*  End of Products section  */}

            {/*  Product Details section  */}
            <div className="bg-[#f8f3f9] p-5 rounded-lg h-full space-y-4 overflow-y-auto">
                <div className="flex flex-row justify-between">
                    <h1 className="text-[#641713] font-bold">Product details</h1>
                    <div className="flex py-2 px-3 bg-white rounded-full gap-2">
                        <EditIcon size={14}/>
                        <span className="text-xs">Edit product</span>
                    </div>
                </div>
                <div className="w-full p-4 bg-white rounded-lg flex flex-col gap-4">
                    <div className="flex flex-row justify-between">
                        <h1 className="font-bold text-[#641713] text-sm flex-1">Product title</h1>
                        <p className="text-sm flex-1 text-right"> Lenovo Laptop 2GB Ram</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h1 className="font-bold text-[#641713] text-sm flex-1">Quantity</h1>
                        <p className="text-sm flex-1 text-right"> 18 </p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h1 className="font-bold text-[#641713] text-sm flex-1">Cost Price</h1>
                        <p className="text-sm flex-1 text-right"> CAD 100</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h1 className="font-bold text-[#641713] text-sm flex-1">Selling Price</h1>
                        <p className="text-sm flex-1 text-right"> CAD 120</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h1 className="font-bold text-[#641713] text-sm flex-1">Discount</h1>
                        <p className="text-sm flex-1 text-right"> 0% </p>
                    </div>
                </div>
                <div className="w-full p-4 bg-white rounded-lg flex flex-col gap-2">
                    <label htmlFor="discount" className="text-sm">Set discount (%)</label>
                    <Input type="number" placeholder="Discount" defaultValue={0}/>
                    <div>
                        <Button type="submit"><span className="text-sm">Save discount</span></Button>
                    </div>
                </div>
            </div>
            {/*  End of Product Details section  */}
        </div>
    )
}

export default AdminIndexPage