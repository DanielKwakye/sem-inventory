export interface ProductModel {
    id: number;
    title: string,
    category: string,
    cost_price: number,
    selling_price: number,
    quantity: number,
    image_path?: string,
    tax_value: number,
    discount_perc: number,
}

export interface StockModel {
    id: number;
    product_id: number;
    quantity: number;
}

export interface ProductStockModel extends ProductModel, StockModel {}

export interface ProductStockModelForm extends ProductStockModel {
    image?: File;
}