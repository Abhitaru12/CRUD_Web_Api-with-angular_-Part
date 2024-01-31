import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Product } from '../shared/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  product: Product = {
    id : 0,
    productName: '',
    price: 0,
    qty: 0
  };


  errorMessage :any;

  constructor(private productService: AppServiceService, private router : Router ) {}

  createProduct(): void {
    this.productService.addProduct(this.product).subscribe(response => {
      //console.log('Product created:', response);
      this.router.navigate(['/allProduct']);
    },(err)=>{
      this.errorMessage = err.error; 
    });
  }
}
