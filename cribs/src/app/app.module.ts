import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CribListingComponent } from './components/crib-listing/crib-listing.component';
import { CribCardComponent } from './components/crib-card/crib-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
