import { Account } from './../../sharings/models/account';
import { GeneralStorage } from './../storages/storages';
import { LoginSocialRequest } from './../../sharings/models/loginSocialRequest';

import { GeneralHelperService } from '../general-helper.service';
import { SummaryService } from '../summary.service';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider } from 'angularx-social-login';
import { Injectable } from '@angular/core';
import { STRING_TYPE } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  account!: Account;
  user!: SocialUser;
  isLoginUser: boolean = false;

  loginSocialRequest: LoginSocialRequest = {
    provider: 0,  
    token: null,
    tokenSecret: null,
      
  };

  constructor(private socialAuthService: SocialAuthService, private router: Router,
    private generalService: GeneralHelperService, private summaryService: SummaryService,
    public storage: GeneralStorage) { }

  public setAccount(account: Account) {
    this.account = account;
  }

  public isLogin(): boolean {
    return this.isLoginUser;
  }

  public logOut(): void {
    this.account == null;
    this.isLoginUser = false;
    this.socialAuthService.signOut().then(
      (result) => {
        localStorage.removeItem("token");
        this.router.navigate(['login']);
      }
    );
  }

  public getAccount() {
    return this.account;
  }

  // loginSocial(loginSocialRequest) {
  //   return this.summaryService.loginSocial(loginSocialRequest);
  // }

  private externalWindow = null;
  // signInWithZalo() {
  //   let params = 'id=emViz_disparities,scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=600,left=450,top=110';
  //   this.externalWindow = window.open('https://oauth.zaloapp.com/v3/permission?app_id=1614548146602132963&redirect_uri=https://demo.com/zalo&state=true',
  //     'Login by Zalo', params);
  //   setTimeout(
  //     () => {
  //       this.externalWindow.alert(this.externalWindow.location.host);
  //       console.log(this.externalWindow.location.host);
  //       console.log(this.externalWindow.document.URL);
  //       console.log("The URL of this page is: " + this.externalWindow.location.href);
  //       console.log(this.externalWindow.location.pathname);
  //     },3000
  //   );

  // }

  signInWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (response) => {
        this.user = response;
        this.login();
      }
    ).catch(
      (error) => {
        this.generalService.handleError(error);
      }
    );
  }
  signInWithFacebook() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (response) => {
        this.user = response;        
        this.login();
      }
    ).catch(
      (error) => {
        this.generalService.handleError(error);
      }
    );
  }
  login() {
    this.isLoginUser = true;
    this.generalService.openWaitingPopup();
    this.account = {
      id:this.user.id,
      displayName:this.user.name,
      email: this.user.email,
      photoUrl: this.user.photoUrl,
      phone: '',
      token: this.user.authToken,
      role: 'ADMIN'
    };
    // this.storage.storage.set("UserAccount", this.account);    
    setTimeout(
      () => {
        this.generalService.closeWaitingPopup();
      },
      1000
    );
    this.router.navigate(['main']);
    
    if (this.user.provider == "GOOGLE") {
      this.loginSocialRequest.provider = 1;
    } else if (this.user.provider == "FACEBOOK") {
      this.loginSocialRequest.provider = 0;
    }
    this.loginSocialRequest.token = this.user.authToken;
    console.log(this.loginSocialRequest);
    // //login to system
    
    this.summaryService.loginSocial(this.loginSocialRequest).subscribe(
      (response) => {
        //console.log(response);
        this.setAccount(response.data);
        this.account.id = response.data.accountId;
        //console.log(this.account);
        localStorage.setItem("accountId", response.data.accountId);
        localStorage.setItem("token", response.data.token);
        console.log(localStorage.getItem("token"));
        this.summaryService.setTokenHeader();
        this.generalService.closeWaitingPopup();
        this.router.navigate(['main']);
      },
      (error) => {
        this.generalService.closeWaitingPopup();
        this.generalService.handleError(error);
      }
    );
  }

}
