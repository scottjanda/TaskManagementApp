import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { TaskChartComponent } from './task-chart/task-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    UserMenuComponent,
    TaskChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
