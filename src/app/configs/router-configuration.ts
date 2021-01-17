
import { RouterModule, Routes } from '@angular/router';
import { LeftSidebarComponent } from '../pages/main-action/left-sidebar/left-sidebar.component';
import { ErrorNotFoundComponent } from '../pages/error-not-found/error-not-found.component';
import { LoginComponent } from '../pages/login/login.component';
import { MainActionComponent } from '../pages/main-action/main-action.component';
import { ManageCostsComponent } from '../pages/main-action/manage-costs/manage-costs.component';


export const ROUTER = RouterModule.forRoot([
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainActionComponent },
  { path: 'costs', component: ManageCostsComponent },
  { path: '**', redirectTo: '404' },
  { path: '404', component: ErrorNotFoundComponent },
]);
