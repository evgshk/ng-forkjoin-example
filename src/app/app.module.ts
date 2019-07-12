import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForkJoinComponent } from './components/fork-join/fork-join.component';
import { StocksService } from './services/stocks.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ForkJoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
