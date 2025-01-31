import { Component, Input } from '@angular/core';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input()
  cart!: Cart;

}
