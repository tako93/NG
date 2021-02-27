export interface IProduct {
    imageUrl: string;
    productName: string;
    productCode: string;
    price: number;
    
}

export class Product implements IProduct {
    imageUrl: string = "";
    productName: string = "";
    productCode: string = "";
    price: number = 0;

    addPrice(newPrice: number): number {
        return 0;
    }
}

