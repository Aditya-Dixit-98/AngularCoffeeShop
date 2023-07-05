import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { CoffeeService } from 'src/app/services/coffee.service';
import { coffeeFetchAPISuccess, invokeCoffeeAPI } from '../actions/coffee.action';
import { selectCoffee } from '../selector/coffee.selector';
@Injectable()

export class CoffeeEffect {
    constructor(
        private action$: Actions,
        private coffeeService: CoffeeService,
        private store: Store
    ){}
    loadCoffee$ = createEffect(() => 
        this.action$.pipe(
            ofType(invokeCoffeeAPI),
            withLatestFrom(this.store.pipe(select(selectCoffee))),
            mergeMap(([,coffeeFromStore]) => {
                console.log("Inside")
                if(coffeeFromStore.length > 50){
                    return EMPTY;
                }
                return this.coffeeService
                .get()
                .pipe(map((data) => coffeeFetchAPISuccess({coffee:data})))
            })

        )
    )
}