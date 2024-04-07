import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestimentsListComponent } from '../components/investiments-list/investiments-list.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: InvestimentsListComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
