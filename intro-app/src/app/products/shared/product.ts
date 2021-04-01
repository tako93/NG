export interface IProduct {
    imageUrl: string;
    productName: string;
    productCode: string;
    price: number;
    rating: number;
}

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


export class Product implements IProduct {
    imageUrl: string = "";
    productName: string = "";
    productCode: string = "";
    price: number = 0;
    rating: number = 0;

    addPrice(newPrice: number): number {
        return 0;
    }
}

