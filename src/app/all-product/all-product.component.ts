import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent {
  product: any;
  products: any;
  updatedProductData: any = {};
  editedProduct: any = {}; // To hold the product being edited
  editing = false; // Flag to show/hide the edit form
  productId!: number;

  constructor(private router: Router,private productService: AppServiceService) {}

  ngOnInit() {
    // Fetch all products
    this.getData();
  }  

  getData(){
    this.products= [];
    this.productService.getAllProducts().subscribe(products => {
      // console.log('Products:', products);
      this.products = products;
    });
  }


  editProduct(product: any) {
    this.editedProduct = { ...product }; // Copy the product to be edited
    this.editing = true; // Show the edit form
  }
  
  updateProduct(){

  }
  deleteProduct(productId: number) {
    if(confirm('Are you sure you want to delete this record?'))
    this.productService.deleteProduct(productId).subscribe(
      () => {
        alert('Product deleted successfully!');
        this.getData();// Reload the page after deletion
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}
