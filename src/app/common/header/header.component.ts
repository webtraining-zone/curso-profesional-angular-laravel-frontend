import { Component, OnInit } from '@angular/core';
import {AfterLoginActionsService} from '../services/after-login-actions.service';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {ToggleModalService} from '../services/toggle-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isModalActive;

  constructor(
    public afterLoginActionsService: AfterLoginActionsService,
    public toggleModalService: ToggleModalService,
    public authService: AuthenticationService,
    public router: Router) {
  }

  ngOnInit() {
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
