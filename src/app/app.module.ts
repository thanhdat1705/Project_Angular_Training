import { DECLARATIONS } from './configs/declare-configuration';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IMPORTS } from './configs/import-configuration';
import { AuthService } from './services/auth-service/auth.service';
import { GeneralHelperService } from './services/general-helper.service';
import { GeneralStorage } from './services/storages/storages';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SocialAuthService } from 'angularx-social-login';
import { socialAuthConfig } from './configs/social-auth-configuration';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { SummaryService } from './services/summary.service';

registerLocaleData(en);

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: [GeneralStorage, AuthService, GeneralHelperService, SummaryService,
    { provide: NZ_I18N, useValue: en_US },
    { provide: SocialAuthService, useFactory: socialAuthConfig },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
