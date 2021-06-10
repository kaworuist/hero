import { Injectable } from '@angular/core';

import { Observable, observable } from 'rxjs';
import { HttpService } from '../http/http.service';


// 浏览器数据库
@Injectable({providedIn: 'root'})
export class IdbService {
    constructor(public httpService: HttpService) {
        this.request = window.indexedDB.open(this.httpService.loginInfo?.uname + 'chat');
        this.request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
            console.log('onupgrading...');
        };
        this.request.onsuccess = (event: any) => {
            console.log(event);
            this.db = event.target.result;
        };
        this.request.onerror = (event) => {
            console.log('error', event);
        };
    }
    db: any;
    request: IDBOpenDBRequest;
}
