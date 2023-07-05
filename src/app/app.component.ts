import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectCoffee } from './data/store/selector/coffee.selector';
import { invokeCoffeeAPI } from './data/store/actions/coffee.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private store: Store){}
  product_quantity=  50
  title = 'CoffeeShop';
  coffee$ = this.store.pipe(select(selectCoffee))
  ngOnInit(): void {
    for(let i = 0; i<this.product_quantity; i++){
      this.store.dispatch(invokeCoffeeAPI());
    }
  }
}
