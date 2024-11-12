import { Component } from '@angular/core';
import { Credentials } from './credentials';
import { ApiService } from '../api.service';
import { AccountInfo } from './accountInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent
{
  constructor(
    private api: ApiService,
  ) { }
  credentials: Credentials = <Credentials>{};
  accountInfo?: AccountInfo;
  login()
  {
    this.api.login(this.credentials).subscribe({
      error: () => { console.log('err') },
      next: () =>
      {
        this.updateAccountInfo();
      }
    });
  }
  logout()
  {
    this.api.logout().subscribe({
      error: () => { console.log('err') },
      next: () =>
      {
        this.updateAccountInfo();
      }
    });
  }
  register()
  {
    this.api.register(this.credentials).subscribe({
      error: () => { console.log('err') },
      complete: () =>
      {
        this.updateAccountInfo();
      }
    });
  }
  deleteAccount()
  {
    this.api.deleteAccount().subscribe({
      error: () => { console.log('err') },
      complete: () =>
      {
        this.updateAccountInfo();
      }
    });
  }
  updateAccountInfo()
  {
    this.api.accountInfo().subscribe({
      next: (res) =>
      {
        this.accountInfo = res;
      },
      error: () => { this.accountInfo = undefined; }
    });
  }

  ngOnInit()
  {
    this.updateAccountInfo();
  }
}
