import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: "app-product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product.component.scss"]
})


export class ProductList implements OnInit{
    productList: IProduct[] = [
        {
            imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k40-pro.jpg",
            productName: "Xiaomi Redmi",
            productCode: "K40 Pro",
            price: 36.997
        },
        {
            imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a32-4g-new.jpg",
            productName: "Samsung Galaxy",
            productCode: "A32",
            price: 22.998
        },
        {
            imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/huawei-p40-4g.jpg",
            productName: "Huawei 4G",
            productCode: "P40",
            price: 30.997
        }
    ];

    

    ngOnInit(): void {
        
    }

 }




