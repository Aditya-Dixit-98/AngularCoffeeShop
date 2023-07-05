import { createReducer, on } from '@ngrx/store';
import { Coffee } from '../../models/coffee';
import { coffeeFetchAPISuccess } from '../actions/coffee.action';

 
export const initialState: Readonly<Coffee[]> = []

export const coffeeReducer = createReducer(
    initialState,
    on(coffeeFetchAPISuccess, (initialState , {coffee}) => {
        return [...initialState,coffee];
    })
);
