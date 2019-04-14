import {Component, OnInit} from '@angular/core'
import { IProduct } from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    
    constructor(productService : ProductService){
        this._productService = productService;
    }
    private _productService : ProductService;
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    //listFilter: string = 'cart';

    _listFilter:string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string ){
        this._listFilter = value;
        this.filteredProducts = this.listFilter? this.performFilter(this.listFilter) : this.products
    }

    onRatingClicked(message: string){
        this.pageTitle = 'Product List: ' +message;
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(
            (product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        )
    }
    ngOnInit(): void {
        // this.products =  this._productService.getProducts();
        this._productService.getProducts().subscribe(
            products => 
                {
                    this.products = products;
                    this.filteredProducts = products;
                },
            error => this.errorMessage =<any>error
        );
        this.filteredProducts = this.products;
        console.log('In OnInit')
    }
    errorMessage : string;
    filteredProducts : IProduct[]=[];
    products:  IProduct[] = [
       
    ];

    toggleImage(): void{
        this.showImage = ! this.showImage;
    }
}