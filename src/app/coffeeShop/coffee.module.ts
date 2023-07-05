import { StoreModule } from "@ngrx/store";
import { NgModule } from "@angular/core";
import { coffeeReducer } from "./store/reducers/coffee.reducer";
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffect } from "./store/effects/coffee.effect";
@NgModule({
    imports:[
        StoreModule.forFeature('mycoffee',coffeeReducer),
        EffectsModule.forFeature([CoffeeEffect])
    ]
})

export class CoffeeModule {}