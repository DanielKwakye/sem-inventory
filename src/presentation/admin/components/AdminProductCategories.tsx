import {categories} from "@/lib/constants.ts";
import AnimatedInView from "@/components/custom/AnimatedInView.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {CheckIcon} from "lucide-react";
import {useAppDispatch, useAppSelector} from "@/store";
import {adminSliceActions} from "@/store/admin-slice.ts";

function AdminProductCategories() {

    const dispatch = useAppDispatch();
    const selectedCategory = useAppSelector(state => state.admin.selectedProductCategory)

    const setCategoryHandler = (category: string) => {
        dispatch(adminSliceActions.updateProductCategory({ category }))
    }

    return (
        <div className="bg-[#f8f3f9] p-5 rounded-lg h-full space-y-4 overflow-y-auto">
            <div className="flex flex-row justify-between">
                <h1 className="text-[#641713] font-bold">Categories</h1>
                <div className="flex py-2 px-3 bg-white rounded-full">
                    <span className="text-xs">4 Categories</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {
                    categories.map((category, index) => {
                        const delay = index * 0.05; // Optional stagger effect
                        const selected = category.slug == selectedCategory

                        const Icon = category.icon
                        return (
                            <AnimatedInView key={"item-" + category.slug} delay={delay}>
                                <div className="aspect-square bg-white rounded-lg p-2 flex flex-col justify-between cursor-pointer" onClick={() => setCategoryHandler(category.slug)}>
                                    <div className="flex justify-end">
                                        <Badge
                                            className={`rounded-full ${selected ? 'bg-[#641713]' : 'bg-[#e9ecfa]'} ${selected ? 'text-white' : 'text-slate-500'}`}>
                                            {index == 0 && (<CheckIcon/>)}
                                            <span>{selected ? 'Selected' : 'not selected'}</span>
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
    )
}

export default AdminProductCategories;