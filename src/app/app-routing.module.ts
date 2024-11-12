import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { OptimizationComponent } from './optimization/optimization.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: 'optimization',
    component: OptimizationComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'help/:id',
    component: HelpComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  /*{
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
    data: { preload: true }
  },*/
  { path: '', redirectTo: '/optimization', pathMatch: 'full' }/*,
  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, <ExtraOptions>{ bindToComponentInputs :true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
