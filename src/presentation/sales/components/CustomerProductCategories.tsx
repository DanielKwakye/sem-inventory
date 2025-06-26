import AnimatedInView from "@/components/custom/AnimatedInView.tsx";
import {laptopCategoryRef, phoneCategoryRef, shirtCategoryRef, shoeCategoryRef} from "@/assets";
import {CheckIcon} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/store";
import {categories} from "@/lib/constants.ts";
import {customerSliceActions} from "@/store/customer-slice.ts";

function CustomerProductCategories() {

    const dispatch = useAppDispatch();
    const categorySelected = useAppSelector(state => state.customer.selectedProductCategory)
    const selectedCategoryTitle = categories.find(c => c.slug === categorySelected)!.title

    const setSelectedCategory = (selectedCategory: "shoes" | "phones" | "laptops" | "shirts") => {
        dispatch(customerSliceActions.updateProductCategory({ category: selectedCategory }))
    }

    return (

        <div className="bg-white rounded-lg space-y-4 p-4">

            <div className="rounded-lg">
                <div className="flex flex-row justify-between">
                    <h1 className="text-[#641713] font-bold">Product Categories</h1>
                    <div className="flex py-2 px-3 bg-white rounded-full gap-2 items-center">
                        <span className="text-xs">{selectedCategoryTitle}</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-2 ">
                <AnimatedInView key={"cat-item-1"} delay={0.05}>
                    <div className="bg-[#f8f3f9] aspect-square rounded-lg relative cursor-pointer group" onClick={() => setSelectedCategory("shoes")}>
                        <div className="absolute p-4 flex flex-col justify-between items-center w-full h-full">
                            <img src={shoeCategoryRef} alt="shoes" className="object-cover w-full h-full group-hover:scale-125 transition duration-700"/>
                        </div>
                        {
                            categorySelected == "shoes" && (
                                <div
                                    className="absolute w-10 h-10 bg-white right-2 top-2 rounded-full flex justify-center items-center">
                                    <CheckIcon size={14}/>
                                </div>
                            )
                        }
                    </div>
                </AnimatedInView>

                <AnimatedInView key={"cat-item-2"} delay={2 * 0.05}>
                    <div className="bg-[#f8f3f9] aspect-square rounded-lg relative cursor-pointer group" onClick={() => setSelectedCategory("phones")}>
                        <div className="absolute p-4 flex flex-col justify-between items-center w-full h-full">
                            <img src={phoneCategoryRef} alt="shoes" className="object-cover w-full h-full group-hover:scale-125 transition duration-700"/>
                        </div>
                        {
                            categorySelected == "phones" && (
                                <div
                                    className="absolute w-10 h-10 bg-white right-2 top-2 rounded-full flex justify-center items-center">
                                    <CheckIcon size={14}/>
                                </div>
                            )
                        }

                    </div>
                </AnimatedInView>

                <AnimatedInView key={"cat-item-3"} delay={3 * 0.05}>
                    <div className="bg-[#f8f3f9] aspect-square rounded-lg relative cursor-pointer group" onClick={() => setSelectedCategory("shirts")}>
                        <div className="absolute p-4 flex flex-col justify-between items-center w-full h-full group-hover:scale-125 transition duration-700">
                            <img src={shirtCategoryRef} alt="shoes"
                                 className="object-cover w-full h-full"/>
                        </div>
                        {
                            categorySelected == "shirts" && (
                                <div
                                    className="absolute w-10 h-10 bg-white right-2 top-2 rounded-full flex justify-center items-center">
                                    <CheckIcon size={14}/>
                                </div>
                            )
                        }
                    </div>
                </AnimatedInView>

                <AnimatedInView key={"cat-item-4"} delay={4 * 0.05}>
                    <div className="bg-[#f8f3f9] aspect-square rounded-lg relative cursor-pointer group" onClick={() => setSelectedCategory("laptops")}>
                        <div className="absolute p-4 flex flex-col justify-between items-center w-full h-full">
                            <img src={laptopCategoryRef} alt="shoes" className="object-cover w-full h-full group-hover:scale-125 transition duration-700"/>
                        </div>
                        {
                            categorySelected == "laptops" && (
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
    )
}

export default CustomerProductCategories