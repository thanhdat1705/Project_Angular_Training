import { DECLARATIONS } from './configs/declare-configuration';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IMPORTS } from './configs/import-configuration';
import { AuthService } from './services/auth-service/auth.service';
import { GeneralHelperService } from './services/general-helper.service';
import { GeneralStorage } from './services/storages/storages';

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: [ GeneralStorage, AuthService, GeneralHelperService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
