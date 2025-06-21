import type {ElementType} from "react";
import {FootprintsIcon, LaptopMinimalIcon, ShirtIcon, SmartphoneIcon} from "lucide-react";

export const categories: {
    title: string
    slug: string
    icon: ElementType
}[] = [
    {
        title: "Phones",
        slug: "phones",
        icon: SmartphoneIcon
    },
    {
        title: "Laptops",
        slug: "laptops",
        icon: LaptopMinimalIcon
    },
    {
        title: "Shirts",
        slug: "shirts",
        icon: ShirtIcon
    },
    {
        title: "Shoes",
        slug: "shoes",
        icon: FootprintsIcon
    }
]