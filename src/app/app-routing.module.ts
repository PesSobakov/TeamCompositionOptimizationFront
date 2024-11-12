import { LOCALE_ID, LOCALE_ID, NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { OptimizationComponent } from './optimization/optimization.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: $localize`:@@locale:en`+'/'+'optimization',
    component: OptimizationComponent
  },
  {
    path: $localize`:@@locale:en` + '/' + 'help',
    component: HelpComponent
  },
  {
    path: $localize`:@@locale:en` + '/' + 'help/:id',
    component: HelpComponent
  },
  {
    path: $localize`:@@locale:en` + '/' + 'home',
    component: HomeComponent
  },
  {
    path: $localize`:@@locale:en` + '/' + 'login',
    component: LoginComponent
  },
  {
    path: $localize`:@@locale:en` + '/' + 'account',
    component: AccountComponent
  },
  { path: '', redirectTo: $localize`:@@locale:en` + '/' + '/home', pathMatch: 'full' }/*,
  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, <ExtraOptions>{ bindToComponentInputs :true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
