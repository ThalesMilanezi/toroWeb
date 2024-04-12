import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LoginComponent } from '../components/login/login.component';
import { InvestimentListComponent } from '../components/investiment-list/investiment-list.component';
import { ProfilePageComponent } from '../components/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: InvestimentListComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
