import {EditIcon} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useAppSelector} from "@/store";
import {getImageUrl} from "@/lib/utils.ts";
import AnimatedInView from "@/components/custom/AnimatedInView.tsx";

function AdminProductDetail() {
    const selectedProduct = useAppSelector(state => state.admin.selectedProduct)
    return (
        <>
            {selectedProduct && (
                <div className="bg-[#f8f3f9] p-5 rounded-lg h-full space-y-4 overflow-y-auto">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-[#641713] font-bold">Product details</h1>
                        <div className="flex py-2 px-3 bg-white rounded-full gap-2">
                            <EditIcon size={14}/>
                            <span className="text-xs">Edit product</span>
                        </div>
                    </div>
                    <AnimatedInView delay={0.01}>
                        <div className={"w-full bg-white aspect-video overflow-clip rounded-lg"}>
                            <img src={getImageUrl(selectedProduct.image_path)} alt="Product image"
                                 className={"w-full h-full object-cover"}/>
                        </div>
                    </AnimatedInView>
                    <AnimatedInView delay={2 * 0.01}>
                        <div className="w-full p-4 bg-white rounded-lg flex flex-col gap-4">
                            <div className="flex flex-row justify-between">
                                <h1 className="font-bold text-[#641713] text-sm flex-1">Product title</h1>
                                <p className="text-sm flex-1 text-right"> {selectedProduct.title} </p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <h1 className="font-bold text-[#641713] text-sm flex-1">Quantity</h1>
                                <p className="text-sm flex-1 text-right"> {selectedProduct.quantity} </p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <h1 className="font-bold text-[#641713] text-sm flex-1">Cost Price</h1>
                                <p className="text-sm flex-1 text-right"> CAD {selectedProduct.cost_price}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <h1 className="font-bold text-[#641713] text-sm flex-1">Selling Price</h1>
                                <p className="text-sm flex-1 text-right"> CAD {selectedProduct.selling_price}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <h1 className="font-bold text-[#641713] text-sm flex-1">Discount</h1>
                                <p className="text-sm flex-1 text-right"> {selectedProduct.discount_perc}% </p>
                            </div>
                        </div>
                    </AnimatedInView>
                    <AnimatedInView delay={3 * 0.01}>
                        <div className="w-full p-4 bg-white rounded-lg flex flex-col gap-2">
                            <label htmlFor="discount" className="text-sm">Set discount (%)</label>
                            <Input type="number" placeholder="Discount" defaultValue={selectedProduct.discount_perc}/>
                            <div>
                                <Button type="submit"><span className="text-sm">Save discount</span></Button>
                            </div>
                        </div>
                    </AnimatedInView>
                </div>
            )}
        </>
    )
}

export default AdminProductDetail