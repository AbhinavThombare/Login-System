import { Injectable } from '@angular/core';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class NotificationApiService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) {}

  registrationAlert() {
    this._snackBar.open('Registration Completed!!', '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      panelClass: ['successbar'],
    });
  }

  loginAlert(msg:any) {
    this._snackBar.open(msg, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:2000,
      panelClass: ['successbar'],
    });
  }

  errorAlert(msg:any) {
    this._snackBar.open(msg,'',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
      panelClass: ['errorbar']
    })
  }
}
