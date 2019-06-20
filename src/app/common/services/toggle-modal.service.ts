import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleModalService {
  onToggle = new EventEmitter<any>();

  constructor() {
  }
}
