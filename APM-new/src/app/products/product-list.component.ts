import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductService } from "./product.service";
import { IProduct } from "./products";

@Component({
    templateUrl: "./product-list.component.html",
    styleUrls: [
        "./product-list.component.css"
    ]
})

export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle: string= "Product List"
    imageWith =80;
    imageMargin =5;
    showImage: boolean = false;
    private _listFilter: string ="";
    sub!: Subscription;
    errorMessage= "";    
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string  ) {
        this._listFilter=value;
        console.log("return value", value)
        this.filteredProducts= this.performFilter(value);

    }
    filteredProducts: IProduct[]=[];


    products: IProduct[]=
    [
    
    ]


constructor (private productService: ProductService){

}
performFilter(filterBy: string ): IProduct[]{
    filterBy= filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct ) => 
        product.productName.toLocaleLowerCase().includes(filterBy));

}

    toggleImage(): void {
        this.showImage=!this.showImage;
    }

    ngOnInit(): void{
         this.sub= this.productService.getProducts().subscribe({
             next: products => {
                 this.products=products;
                 this.filteredProducts= this.products;
             },
             
             error: err => this.errorMessage=err
         });
        
    
    }

    onRatingClicked(message: string ): void{
        this.pageTitle= "Product List: "+ message;
    }


    ngOnDestroy(): void{
        this.sub.unsubscribe();
    }

}

