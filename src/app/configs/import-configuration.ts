

import { ROUTER } from './router-configuration';
// Module
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../sharings/material/material.module';
// import { BarChartModule } from '../sharings/modules/charts/bar-chart/bar-chart.module';
// import { LineChartModule } from '../sharings/modules/charts/line-chart/line-chart.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { SocialLoginModule } from 'angularx-social-login';
import { IconsProviderModule } from '../icons-provider.module';
import { NzTableModule } from 'ng-zorro-antd/table';

export const IMPORTS = [
  BrowserModule,
  HttpClientModule,
  SocialLoginModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  BrowserAnimationsModule,
  MaterialModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatExpansionModule,
  MatSnackBarModule,
  BrowserAnimationsModule,
  NzGridModule,
  NzLayoutModule,
  NzMenuModule,
  NzBreadCrumbModule,
  IconsProviderModule,
  NzTableModule,
  //BarChartModule,
  //LineChartModule,
  ROUTER,
];

