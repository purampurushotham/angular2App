import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeaderComponent } from './header/header.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from "./hero.service";
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeaderComponent,
    HeroDetailComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'heroes', component: HeroesComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'detail/:id',component: HeroDetailComponent},
      {path: '',redirectTo:'/dashboard',pathMatch:'full'},



    ])
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
