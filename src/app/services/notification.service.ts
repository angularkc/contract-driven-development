import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private service: MatSnackBar) { }

  notify(message: string) {
    this.service.open(message, 'close', {duration: 3000});
  }
}
