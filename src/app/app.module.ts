import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { coffeeReducer } from './data/store/reducers/coffee.reducer';
import { CoffeeEffect } from './data/store/effects/coffee.effect';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './components/layout/layout.module';
import { LayoutComponent } from './components/layout/layout.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature('mycoffee',coffeeReducer),
    EffectsModule.forFeature([CoffeeEffect]),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    LayoutModule,
    LayoutComponent,
    AppBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
