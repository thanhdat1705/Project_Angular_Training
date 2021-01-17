
import { RouterModule, Routes } from '@angular/router';
import { LeftSidebarComponent } from '../pages/main-action/left-sidebar/left-sidebar.component';
import { ErrorNotFoundComponent } from '../pages/error-not-found/error-not-found.component';
import { LoginComponent } from '../pages/login/login.component';
import { MainActionComponent } from '../pages/main-action/main-action.component';


export const ROUTER = RouterModule.forRoot([
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainActionComponent,
    data: {breadcrumb : 'Main'},
    children: [
      {
        path: 'ecommerce',
        data: {
          breadcrumb: 'E-Commerce'
        },
        children: [
          {
            path: 'ecommerce-dashboard',
            component: ErrorNotFoundComponent,
            data: {
              breadcrumb: 'E-Commerce Dashboard'
            }
          }
        ]
      },{
        path: 'product-management',
        data: {
          breadcrumb: 'Product Management'
        },
        children: [
          {
            path: 'product-list',
            component: ErrorNotFoundComponent,
            data: {
              breadcrumb: 'Product list'
            }
          },
          {
            path: 'category-list',
            component: ErrorNotFoundComponent,
            data: {
              breadcrumb: 'Category list'
            }
          }
        ]
      },{
        path: 'cost-management',
        data: {
          breadcrumb: 'Cost Management'
        },
        children: [
          {
            path: 'cost-list',
            component: ErrorNotFoundComponent,
            data: {
              breadcrumb: 'Cost list'
            }
          },
          {
            path: 'cost-type-list',
            component: ErrorNotFoundComponent,
            data: {
              breadcrumb: 'Cost Type list'
            }
          }
        ]
      },

    ]
   },
  { path: '**', redirectTo: '404' },
  { path: '404', component: ErrorNotFoundComponent },
  // {
  //   path: 'dashboard',
  //   component: MainActionComponent,
  //   data: {
  //     breadcrumb: 'Dashboard'
  //   },
  //   children: [
  //     {
  //       path: 'product',
  //       component: LoginComponent,
  //       data: {
  //         breadcrumb: 'Product'
  //       }
  //     }
  //   ]
  // }

]);
