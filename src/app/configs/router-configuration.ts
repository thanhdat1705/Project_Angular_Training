
import { RouterModule, Routes } from '@angular/router';
import { LeftSidebarComponent } from '../pages/main-action/left-sidebar/left-sidebar.component';
import { ErrorNotFoundComponent } from '../pages/error-not-found/error-not-found.component';
import { LoginComponent } from '../pages/login/login.component';
import { MainActionComponent } from '../pages/main-action/main-action.component';
import { ProductManagerComponent } from '../pages/main-action/left-sidebar/product-manager/product-manager.component';


export const ROUTER = RouterModule.forRoot([
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainActionComponent, children:[
    {path: 'product', component: ProductManagerComponent}
  ] },
  { path: '**', redirectTo: '404' },
  { path: '404', component: ErrorNotFoundComponent },
]);
