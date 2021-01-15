import { GeneralHelperService } from './../../services/general-helper.service';
import { AuthService } from './../../services/auth-service/auth.service';
import { SummaryService } from './../../services/summary.service';
import { APPLOGO, GOOGLELOGO, FACEBOOKLOGO } from './../../sharings/assets/assets';


import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SocialUser, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  appLogoURL = APPLOGO;
  // googleLogoURL =GOOGLELOGO;
  // facebookLogoURL = FACEBOOKLOGO;

  user!: SocialUser;

  ngOnInit(): void {
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.user = user;

    //   console.log(this.user);
    // });
    this.socialAuthService.initState.toPromise().then();
  }

  constructor(private dialog: MatDialog, private router: Router, public authService: AuthService,
    private summaryService: SummaryService,
    private socialAuthService: SocialAuthService,
    private generalService: GeneralHelperService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    // this.matIconRegistry.addSvgIcon("Google-logo", this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL));
    // this.matIconRegistry.addSvgIcon("Facebook-logo",this.domSanitizer.bypassSecurityTrustResourceUrl(this.facebookLogoURL));

  };

}
