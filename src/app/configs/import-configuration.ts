

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
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { SocialLoginModule } from 'angularx-social-login';
import { IconsProviderModule } from '../icons-provider.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { AngularFireModule } from '@angular/fire';
import firebase from 'firebase';
import { firebaseConfig } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
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
  NzButtonModule,
  //BarChartModule,
  //LineChartModule,
  NzTableModule,
  NzButtonModule,
  NzModalModule,
  NzInputModule,
  NzFormModule,
  NzInputNumberModule,
  NzSelectModule,
  NzIconModule,
  NzPopconfirmModule,
  NzSpinModule,
  NzAlertModule,
  NzNotificationModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule,
  // firebase.initializeApp(firebaseConfig),
  ROUTER,
  
  
];

