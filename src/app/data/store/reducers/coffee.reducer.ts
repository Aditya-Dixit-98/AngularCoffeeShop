import { createReducer, on } from '@ngrx/store';
import { Coffee } from '../../models/coffee';
import { coffeeFetchAPISuccess } from '../actions/coffee.action';

 
export const initialState: ReadonlyArray<Coffee> = []

export const coffeeReducer = createReducer(
    initialState,
    on(coffeeFetchAPISuccess, (state, { coffee }) => {
        return coffee;
    })
);
