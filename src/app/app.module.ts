import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { TraderComponent } from './trader/trader.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { InformationComponent } from './information/information.component';
import { MenuComponent } from './shared/menu/menu.component';
import {
  MatButtonToggleModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule,
  MatSidenavModule, MatSnackBarModule
} from "@angular/material";
import {MatIconModule} from "@angular/material";
import {MatToolbarModule} from "@angular/material";
import {MatButtonModule} from "@angular/material";
import{StatService} from "./services/stat.service";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'statistics', component: StatisticsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TraderComponent,
    StatisticsComponent,
    InformationComponent,
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),

    BrowserModule,MatIconModule,MatToolbarModule,MatButtonModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule,
  MatSidenavModule, MatSnackBarModule
  ],
  providers: [StatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
