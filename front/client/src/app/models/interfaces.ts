export interface Stock {
    id?: number;
    quantity?: number;
    client?: Client;
    product?: Product;
    created_at?: Date;
    user?: string;
}

export interface StockSimple {
    id?: number;
    quantity?: number;
    id_client?: number;
    id_product?: number;
    created_at?: Date;
    user?: string;
}

export interface Client {
    id?: number;
    name?: string;
}

export interface Product {
    id?: number;
    name?: string;
    description?: string;
    image?: string;
}
