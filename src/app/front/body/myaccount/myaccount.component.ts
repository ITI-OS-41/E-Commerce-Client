import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/share/dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss'],
})
export class MyaccountComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}
  userData;

  ngOnInit(): void {
    if (!sessionStorage.getItem('user-data')) {
      this.router.navigate(['home']);
    }
  }

  openDialog(_html) {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: {
        html: _html,
      },
    });
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
  }
  logout() {
    sessionStorage.removeItem('user-data');
    let _html = `
      <div class="c-red">
        <div class="material-icons">task_alt</div>
        <h1>Logout Success!</h1>
      </div>`;
    this.openDialog(_html);
    this.router.navigate(['home']);
  }

  get user() {
    if (sessionStorage.getItem('user-data')) {
      this.userData = JSON.parse(sessionStorage.getItem('user-data'));
    }
    return this.userData ? this.userData : false;
  }
}
