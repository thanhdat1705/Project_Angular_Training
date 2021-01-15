

import { ROUTER } from './router-configuration';
import { AppRoutingModule } from './../app-routing.module';
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


export const IMPORTS = [
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
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
  //BarChartModule,
  //LineChartModule,
  ROUTER,
];

