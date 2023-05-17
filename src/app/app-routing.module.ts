import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './modules/signin/signin.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
