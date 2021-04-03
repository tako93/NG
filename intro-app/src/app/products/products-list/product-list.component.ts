import { Component, OnDestroy, OnInit } from "@angular/core";
import { IProduct, ITodo } from "../shared/product";
import { ProductService } from "../shared/product.service";

@Component({
    selector: "app-product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product.component.scss"]
})


export class ProductListComponent implements OnInit, OnDestroy {
    private _filterValue: string = '';

    showImages: boolean = false;
    filteredProducts: IProduct[] = [];

    productList: IProduct[] = [
        {
            imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k40-pro.jpg",
            productName: "Xiaomi Redmi",
            productCode: "K40 Pro",
            price: 36.997,
            rating: 10
        },
        {
            imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a32-4g-new.jpg",
            productName: "Samsung Galaxy",
            productCode: "A32",
            price: 22.998,
            rating: 7
        },
        {
            imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/huawei-p40-4g.jpg",
            productName: "Huawei 4G",
            productCode: "P40",
            price: 30.997,
            rating: 7
        }
    ];

    constructor(private _productService: ProductService) {
        // this.filterValue = 'xiaomi';
    }

    ngOnInit(): void {
        this.productList = this._productService.getProduct();
        this.filterValue = '';
        this._productService.getTodos().subscribe((data: ITodo[]) => {
            console.log(data);
        })

    }


     ngOnDestroy(): void {

    }

    get filterValue(): string {
        return this._filterValue;
    }
    set filterValue(value: string) {

        this._filterValue = value;
        if (this._filterValue) {
            this.filteredProducts = this.productList.filter((p) => { return p.productName.toLowerCase().includes(this._filterValue.toLowerCase()) });
        } else {

            this.filteredProducts = this.productList.slice();
        }

    }



    toggleImages(): void {
        this.showImages = !this.showImages
    }

    onRatingChange(message: number): void{
        console.log(message);
    }


    

}




