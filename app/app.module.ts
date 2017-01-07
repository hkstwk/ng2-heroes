import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
import {Auth} from "./auth.service";
import {DashboardComponent} from "./dashboard.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import "./rxjs-extensions";
import {HeroSearchComponent} from "./hero-search.component";
import {AUTH_PROVIDERS} from "angular2-jwt";
import {ProfileComponent} from "./profile.component";
import {AuthGuard} from "./auth.guard";


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    ProfileComponent
  ],
  providers:    [
    HeroService,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

