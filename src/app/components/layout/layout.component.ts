import { Component, OnInit} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Store, select } from '@ngrx/store';
import { selectCoffee } from '../../data/store/selector/coffee.selector';
import { AsyncPipe, JsonPipe, NgFor,SlicePipe } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatCardModule} from '@angular/material/card';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import { map, take, toArray } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Coffee } from '../../data/models/coffee';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [MatGridListModule,MatCardModule, NgFor, AsyncPipe, MatPaginatorModule, JsonPipe, SlicePipe],
})
export class LayoutComponent {
  cols: number = 2
  startpageItemIndex: number = 0
  endpageItemIndex: number = 10
  sliced$ = Observable<Coffee[]>
  constructor (private store: Store,
    private breakpointObserver: BreakpointObserver){
      this.breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ]).subscribe(result => {
        if(result.matches){
          if(result.breakpoints[Breakpoints.XSmall]){
              this.cols = 1
          }
          else {
            this.cols = 2
          }
        }
      })
    }
    handlePageEvent(e: PageEvent) {
      this.startpageItemIndex = e.pageIndex > 0 ? (e.pageIndex*10): e.pageIndex;
      this.endpageItemIndex = (e.pageIndex+1) *10

    }
  coffee$ = this.store.pipe(select(selectCoffee),map(value => value))
}
