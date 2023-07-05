import { Component, Inject, OnInit} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Store, select } from '@ngrx/store';
import { selectCoffee } from '../../data/store/selector/coffee.selector';
import { AsyncPipe, JsonPipe, NgFor,SlicePipe } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatCard, MatCardModule} from '@angular/material/card';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { Coffee } from '../../data/models/coffee';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [MatGridListModule,MatCardModule, NgFor, AsyncPipe, MatPaginatorModule, JsonPipe, SlicePipe,  MatDialogModule],
})
export class LayoutComponent {
  cols: number = 2
  startpageItemIndex: number = 0
  endpageItemIndex: number = 10
  coffee$ = this.store.pipe(select(selectCoffee),map(value => value))

  constructor (private store: Store,
    private breakpointObserver: BreakpointObserver, public dialog: MatDialog){
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
  /*
   *Summary: Function takes PageEvent as an argument from navigator
   *Params: PageEvent(Event)(
    {
      length: number
      pageIndex: number
      pageSize: number
      previousPageIndex: number
    }
   )
   *Returns: void
  */
    handlePageEvent(e: PageEvent) {
      this.startpageItemIndex = e.pageIndex > 0 ? (e.pageIndex*10): e.pageIndex;
      this.endpageItemIndex = (e.pageIndex+1) *10

    }
  /*
   *Summary: Function takes single Coffee data and injects it in to the DataDialogComponent
   *Params: data(Coffee)
   *Returns: void
  */
  openDialog(data: Coffee) {
    this.dialog.open(DataDialogComponent,{
      data
    });
}
}


// Dialog Component Declaration
@Component({
  selector: 'app-data-dialog',
  templateUrl: './data-dialog.component.html',
  styleUrls: ['./data-dialog.component.css'],
  standalone: true,
  imports: [MatCardModule],
})
export class DataDialogComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: Coffee) {
  }
}
