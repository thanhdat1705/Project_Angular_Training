import { MainActionComponent } from './../pages/main-action/main-action.component';
import { ErrorNotFoundComponent } from './../pages/error-not-found/error-not-found.component';
import { VerifyActionComponent } from './../sharings/components/verify-action/verify-action.component';
import { CenterPopupMessageComponent } from '../sharings/components/center-popup-message/center-popup-message.component';
import { MessageComponent } from '../sharings/components/message/message.component';
import { WaitingComponent } from '../sharings/components/waiting/waiting.component';
import { AppComponent } from './../app.component';
import { LoginComponent } from '../pages/login/login.component';

export const DECLARATIONS = [
  AppComponent,
  WaitingComponent,
  CenterPopupMessageComponent,
  MessageComponent,
  VerifyActionComponent,
  ErrorNotFoundComponent,
  LoginComponent,
  MainActionComponent
];
