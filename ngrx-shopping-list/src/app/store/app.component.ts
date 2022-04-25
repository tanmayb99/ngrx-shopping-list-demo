import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './models/app-state.model';
import { ShoppingItem } from './models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  shoppingItems$?: Observable<Array<ShoppingItem>>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping)
    this.shoppingItems$.subscribe(e => console.log('check', e))
    this.store.select(store => store.shopping).subscribe(e => console.log('fer', e))
  }
}
