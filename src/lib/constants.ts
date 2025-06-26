import type {ElementType} from "react";
import {FootprintsIcon, LaptopMinimalIcon, ShirtIcon, SmartphoneIcon} from "lucide-react";

// export const apiBaseUrl = "http://localhost:8000";
export const apiBaseUrl = "https://inventory-py-backend.onrender.com";

export const categories: {
    title: string
    slug: string
    icon: ElementType
}[] = [
    {
        title: "Shoes",
        slug: "shoes",
        icon: FootprintsIcon
    },
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
    }
]