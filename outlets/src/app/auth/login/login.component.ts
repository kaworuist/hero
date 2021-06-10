import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http/http.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    pwd: new FormControl('')
  });
  login(): void {
    console.log(this.profileForm.value);
    this.httpService.login({uname: this.profileForm.value.name, upwd: this.profileForm.value.pwd, override: 'true'})
    .subscribe(r => {
      if (r.ret === 'ok'){
        this.httpService.loginInfo = {
          uname: this.profileForm.value.name,
          token: r.info,
          termtype: '',
        };
        console.log(this.httpService.loginInfo);
        console.log(this.authService.redirectUrl);
        this.router.navigate([this.authService.redirectUrl]);
      }else{
        console.log(r.info);
      }
    });
  }
  constructor(public httpService: HttpService, public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

}
