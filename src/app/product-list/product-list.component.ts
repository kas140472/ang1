import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // name: string = 'iphone 13';
  // price: number = 999;
  // color: string = 'Red'
  // name="John Doe";
  // addToCart: number = 0;
  // product = {
  //   name: 'iphone x',
  //   price: 789,
  //   color: 'Black',
  //   discount: 8.5,
  //   inStock: 5,
  //   pImage: '/assets/images/planet.jpg'
  // }
  // getDiscountedPrice() {
  //   return this.product.price - (this.product.price * this.product.discount / 100)
  // }
  // onNameChange(event: any){
  //   // console.log(event);
  //   // this.name = event.target.value;
  // }

  // incrementCartValue(){
  //   if (this.addToCart < this.product.inStock) {
  //     this.addToCart ++;
  //   }
  // }

  // decrementCartValue(){
  //   if (this.addToCart > 0) {
  //     this.addToCart --;
  //   }
  // }

  listOfString: string[] = ['Mark', 'Steve', 'Henry', 'John', 'Sarah'];
}
