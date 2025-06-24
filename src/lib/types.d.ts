interface ProductModel {
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

interface StockModel {
    id: number;
    product_id: number;
    quantity: number;
}

interface ProductStockModel implements ProductModel, StockModel {}