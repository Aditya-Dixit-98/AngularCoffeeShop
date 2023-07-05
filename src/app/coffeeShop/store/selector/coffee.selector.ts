import { Store, createFeatureSelector, createSelector, select } from "@ngrx/store";
import { Coffee } from "../../models/coffee";


export const selectCoffee = createFeatureSelector<Coffee[]>('mycoffee');
