import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

export function socialAuthConfig(): SocialAuthService{
  return new SocialAuthService(
    {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('919491659014-03oqve4tlpoej91k3lce4a4006lic3gu.apps.googleusercontent.com', {
            scope: 'profile email'
          })
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('365245134862654', {
            cookie: true,
            xfbml: true,
            scope: 'public_profile,email',
            fields: "id,name,email",
            version: 'v8.0'
          })
        }
      ]
    }
  );
}
