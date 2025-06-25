import AddNewProduct from "@/presentation/admin/components/AddNewProduct.tsx";
import AnimatedInView from "@/components/custom/AnimatedInView.tsx";
import {productExampleImg} from "@/assets";
import {CheckIcon, MinusIcon, PlusIcon} from "lucide-react";

function AdminProducts() {
    return (
        <div className="bg-[#f8f3f9] p-5 rounded-lg h-full space-y-4 overflow-y-auto">
            <div className="flex flex-row justify-between">
                <h1 className="text-[#641713] font-bold">Products</h1>
                <AddNewProduct/>
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
    )
}

export default AdminProducts;