import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TrendsListComponent } from '../components/trends-list/trends-list.component';
import { ProfilePageComponent } from '../components/profile-page/profile-page.component';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LoginComponent } from '../components/login/login.component';
import { InvestimentListComponent } from '../components/investiment-list/investiment-list.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendsListComponent,
    ProfilePageComponent,
    PageNotFoundComponent,
    LoginComponent,
    InvestimentListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    MaterialUiModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
