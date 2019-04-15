import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { IProduct } from './product';
import {Router} from '@angular/router';
@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private _route: ActivatedRoute;
  private _router: Router;
  pageTitle: string = 'Product Detail';
  product: IProduct;
  constructor(route : ActivatedRoute, router : Router) { 
    this._router = router;
    this._route = route;
    console.log(this._route.snapshot.paramMap.get('id'));
  }
  onBack(): void {
    this._router.navigate(['/products']);
  }
  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    };
  }

}
