import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { AllProductComponent } from './all-product/all-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes: Routes = [
  { path : 'allProduct',  component: AllProductComponent },
  { path : 'getById', component : GetByIdComponent },
  { path : 'createProduct', component : CreateProductComponent },
  { path:'editProduct/:id', component :EditProductComponent },
  { path: '', redirectTo: '/allProduct', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
