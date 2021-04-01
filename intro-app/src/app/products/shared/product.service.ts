import { Injectable } from '@angular/core'
import { IProduct, ITodo } from './product'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private _baseURL = "https://jsonplaceholder.typicode.com";
    constructor(private http: HttpClient) { }
    getProduct(): IProduct[] {
        return [{
            imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k40-pro.jpg",
            productName: "Xiaomi Redmi",
            productCode: "K40 Pro",
            price: 36.997,
            rating: 4
        },
        {
            imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a32-4g-new.jpg",
            productName: "Samsung Galaxy",
            productCode: "A32",
            price: 22.998,
            rating: 5
        },
        {
            imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/huawei-p40-4g.jpg",
            productName: "Huawei 4G",
            productCode: "P40",
            price: 30.997,
            rating: 3
        }
        ]
    }



    getTodos(): Observable<ITodo[]> {
        return this.http.get<ITodo[]>(`${this._baseURL}/todos?_start=0&_limit=10`)
    }


}