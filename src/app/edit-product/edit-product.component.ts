import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  updatedProductData: any = {};
  products: any;
  editedProduct: any = {}; // To hold the product being edited
  editing = false; // Flag to show/hide the edit form
  productId!: number;
    product !: Product;
 
  constructor(private router: Router,private productService: AppServiceService, private route : ActivatedRoute) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        const Id = params['id'];
        console.log(Id);
        this.productService.getProduct(Id).subscribe((data : Product) =>{
          this.product = data
        });
      }) ;
  }

  editProduct(product: any) {
    // Assuming 'product' has the same properties as 'editedProduct'
    this.editedProduct = { ...product }; // Copy the product to be edited
    //this.editing = true; // Show the edit form
  }
  

  onSubmit() {
    if (this.editedProduct && this.editedProduct.id) { // Ensure id exists
      this.productService.updateProduct(this.editedProduct.id, this.editedProduct).subscribe(
        (updatedProduct) => {
          //console.log('Updated Product:', this.editedProduct);
          this.router.navigate(['/allProduct']);
          // const index = this.products.findIndex((p: { id: number }) => p.id === updatedProduct.id);
          // if (index !== -1) {
            //this.products[index] = updatedProduct;
           //this.editing = false; // Hide the edit form 
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    }
  }

  updateProduct() {
    if (this.editedProduct && this.editedProduct.id) { // Ensure id exists
      this.productService.updateProduct(this.editedProduct.id, this.editedProduct)
        .subscribe(
          (response) => {
            console.log('Product updated successfully!', response);
            //this.editing = false;
            //this.router.navigate(['/allProduct']);
          },
          (error) => {
            console.error('Error updating product:', error);
          }
        );
    }
  }
  
}
