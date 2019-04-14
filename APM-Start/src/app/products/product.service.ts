import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from "rxjs";
import {catchError, tap} from 'rxjs/operators';
import { $ } from "protractor";
@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private productUrl : string = 'api/products/products.json';
    private _httpClient : HttpClient
    constructor(httpClient: HttpClient){
        this._httpClient = httpClient;
    }
    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage =`An error ocurred: ${err.error.message}`;
        }
        else{
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
    getProducts(): Observable<IProduct[]>{
        return this._httpClient.get<IProduct[]>(this.productUrl)
            .pipe(
                        tap(data => console.log('All: ' + JSON.stringify(data))),
                        catchError(this.handleError)
                    )
        // return [
        //     {
        //     "productId": 1,
        //     "productName": "Leaf Rake",
        //     "productCode": "GDN-0011",
        //     "releaseDate": "March 19, 2016",
        //     "description": "Leaf rake with 48-inch wooden handle.",
        //     "price": 19.95,
        //     "starRating": 3.2,
        //     "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        //   },
        //   {
        //     "productId": 2,
        //     "productName": "Garden Cart",
        //     "productCode": "GDN-0023",
        //     "releaseDate": "March 18, 2016",
        //     "description": "15 gallon capacity rolling garden cart",
        //     "price": 32.99,
        //     "starRating": 4.2,
        //     "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        //   },
        //   {
        //     "productId": 5,
        //     "productName": "Hammer",
        //     "productCode": "TBX-0048",
        //     "releaseDate": "May 21, 2016",
        //     "description": "Curved claw steel hammer",
        //     "price": 8.9,
        //     "starRating": 4.8,
        //     "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        //   }
        // ];
    }
}