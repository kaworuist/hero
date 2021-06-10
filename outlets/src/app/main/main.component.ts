import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  toSet(): void {
    this.router.navigate(['/main', { outlets: { page: null }}]);
  }
  constructor(private router: Router, public httpService: HttpService) { }

  ngOnInit(): void {
    // this.httpService.login({uname: '3038', upwd: 'simton2202', override: 'true'})
    // .subscribe(
    //   resp => {
    //     if (resp.ret === 'err'){
    //       console.log(resp.info);
    //     }else{
    //       this.httpService.loginInfo = {uname: '3038', token: resp.info.token, termtype: ''};
    //       console.log(this.httpService.loginInfo);
    //     }
    //   }
    // );
  }

}
