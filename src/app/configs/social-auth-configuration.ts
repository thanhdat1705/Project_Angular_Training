import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

export function socialAuthConfig(): SocialAuthService{
  return new SocialAuthService(
    {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('856874909598-c0u77u1i5td8qap97k4f9q8954fqvv9p.apps.googleusercontent.com', {
            scope: 'profile email'
          })
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('373017660549234', {
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
