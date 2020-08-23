import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SessionStorageService} from 'ngx-webstorage';
import {AuthenticationService} from '../../../common/services/authentication.service';
import {AfterLoginActionsService} from '../../../common/services/after-login-actions.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  user: any = {
    email: 'esmeralda@webtraining.zone',
    password: 'esmeralda',
  };

  constructor(
    public authService: AuthenticationService,
    public sessionStorage: SessionStorageService,
    public afterLoginActionsService: AfterLoginActionsService,
    public router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    event.preventDefault();

    // Run service for auth
    this.authService.login(this.user.email, this.user.password).subscribe(
      (data) => {
        this.authService.user = data;
        this.authService.hasSession = true;
        this.sessionStorage.store('user', data);

        // This "after login service" is used in the "Header" component
        // to close the modal and create the "userInHeader" object to render the "user.name"
        this.afterLoginActionsService.onLoginCompleted.emit('Done');

        this.router.navigate(['/auth-home']); // Navigate to "auth-home"
      },
      err => {
        console.error(err);
        this.authService.hasSession = false;
      },
    );
  }

}
