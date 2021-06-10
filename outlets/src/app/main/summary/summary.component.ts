import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http/http.service';
import { IdbService } from 'src/app/idb/idb.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(public httpService: HttpService, public idbService: IdbService) { }
  recv: any;
  send: any;
  get(): void {
    this.httpService.get('appIm', 'getOfflineMsg', {to: this.httpService.loginInfo?.uname, startId: 0})
    .subscribe(
      resp => {
        this.recv = resp;
        console.log(resp);
      }
    );
    this.httpService.get('appIm', 'getOfflineMsg', {from: this.httpService.loginInfo?.uname, startId: 0})
    .subscribe(
      resp => {
        this.send = resp;
        console.log(resp);
      }
    );
  }
  ngOnInit(): void {
  }

}
