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
    { code: 'en-US', label: 'English'},
    { code: 'es', label: 'Español'},
  ];

  constructor(
    public afterLoginActionsService: AfterLoginActionsService,
    public toggleModalService: ToggleModalService,
    public authService: AuthenticationService,
    public router: Router,
    @Inject(LOCALE_ID) protected localeId: string) {
    console.log('Current locale:', localeId);
  }

  ngOnInit() {
    this.afterLoginActionsService.onLoginCompleted.subscribe(
      (message: string) => {
        this.toggleModal();
      });

    this.toggleModalService.onToggle.subscribe(
      (message: string) => {
        this.toggleModal();
      });
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
