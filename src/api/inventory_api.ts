import apiClient from "@/api/config.api.ts";
import store from "@/store";
import type {ProductStockModelForm} from "@/lib/types";

export const apiGetProducts = async( category: string = "shoes" ) => {
    return await apiClient.get(`/products?category=${category}`).then((response) =>  response.data.data)
};

export const apiAddNewProduct = async( formData: FormData ) => {
    formData.set("user_role", store.getState().auth.userRole || "")
    formData.set("category", store.getState().admin.selectedProductCategory)
    return await apiClient.post(`/product`, formData).then((response) =>  response.data)
};

export const apiUpdateProduct = async( productId: number,  payload: ProductStockModelForm) => {
    const userRole = store.getState().auth.userRole
    console.log("payload", payload)
    return await apiClient.put(`/product/${productId}`, { ...payload, "user_role": userRole }).then((response) =>  response.data)
};

export const apiUpdateStock = async( productId: number,  quantity: number) => {
    const userRole = store.getState().auth.userRole
    return await apiClient.put(`/update-stock/${productId}`, { "user_role": userRole, quantity: quantity }).then((response) =>  response.data)
};

export const apiDeleteProduct = async( productId: number ) => {
    return await apiClient.delete(`/product/${productId}`, {
        params: {
            'user_role': store.getState().auth.userRole
        }
    }).then((response) =>  response.data)
};

export const apiCheckout = async( payload: {}[]  & { "user_role": string | undefined }  ) => {
    payload['user_role'] = store.getState().auth.userRole
    return await apiClient.post(`/checkout`, payload).then((response) =>  response.data)
};