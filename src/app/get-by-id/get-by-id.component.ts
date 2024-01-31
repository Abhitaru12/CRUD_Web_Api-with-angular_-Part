import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.scss']
})
export class GetByIdComponent implements OnInit{
  product: any;
  productId!: number;
  errorMessage ='';

  constructor(private route: ActivatedRoute, private appService: AppServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        const productId = +idParam;
        this.appService.getProduct(productId).subscribe(product => {
          this.product = product;
        });
      }
    });
  }
  fetchProduct() {
    if (this.productId) {
      this.appService.getProduct(this.productId).subscribe(
        (product) => {
          this.product = product;
          this.errorMessage = ''; 
        },
        (err) => {
          this.errorMessage = err.error;
        }
      );
    }
  }
}
