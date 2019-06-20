import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AfterLoginActionsService {
  onLoginCompleted = new EventEmitter<any>();

  constructor() {
  }
}
