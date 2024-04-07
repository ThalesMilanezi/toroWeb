import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InvestimentsListComponent } from '../components/investiments-list/investiments-list.component';
import { TrendsListComponent } from '../components/trends-list/trends-list.component';
import { ProfilePageComponent } from '../components/profile-page/profile-page.component';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestimentsListComponent,
    TrendsListComponent,
    ProfilePageComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    MaterialUiModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
