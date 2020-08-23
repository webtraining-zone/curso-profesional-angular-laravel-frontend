import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {AfterLoginActionsService} from '../services/after-login-actions.service';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {ToggleModalService} from '../services/toggle-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isModalActive;

  languages = [
    { code: 'en', label: 'English'},
    { code: 'es', label: 'Español'},
  ];

  userInHeader: object = null;

  constructor(
    public afterLoginActionsService: AfterLoginActionsService,
    public toggleModalService: ToggleModalService,
    public authService: AuthenticationService,
    public router: Router,
    @Inject(LOCALE_ID) protected localeId: string) {
    console.log('Current locale:', localeId);

    // Try to get the user if doesn't exist
    // This is useful when the page loads and the user has a valid token
    if (!this.userInHeader) {
      this.userInHeader = this.authService.getAuthenticatedUser();
    }
  }

  ngOnInit() {
    this.afterLoginActionsService.onLoginCompleted.subscribe(
      (message: string) => {
        this.toggleModal();

        // After login assign the user
        this.prepareUser();
      });

    this.toggleModalService.onToggle.subscribe(
      (message: string) => {
        this.toggleModal();
      });
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

  prepareUser() {
    this.userInHeader = this.authService.getAuthenticatedUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
