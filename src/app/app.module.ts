import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { ImportantInfoComponent } from './important-info/important-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { GastosMesComponent } from './gastos-mes/gastos-mes.component';
import { IngresosMesComponent } from './ingresos-mes/ingresos-mes.component';
import { DashboardSubComponent } from './dashboard-sub/dashboard-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    HomeBodyComponent,
    DashBoardComponent,
    DashboardHomeComponent,
    DashboardNavComponent,
    ImportantInfoComponent,
    CalendarComponent,
    GastosMesComponent,
    IngresosMesComponent,
    DashboardSubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
