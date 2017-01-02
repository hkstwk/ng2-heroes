import {Injectable} from "@angular/core";
import {tokenNotExpired} from "angular2-jwt";

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('jfDMCdZiUSmrcoqKh8bNcsdrs16Sv60j', 'hkstwk.eu.auth0.com', {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult : any) => {
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    // Call the show method to display the widget.
    console.log('Starting logging in');
    this.lock.show();
    console.log('Finished logging in');
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    console.log('call to authenticated()')
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    console.log('logged out, id_token removed from local storage');
  }
}

