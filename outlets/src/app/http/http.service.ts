import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export interface LoginInfo {
    uname: string;
    token: string;
    termtype: string;
}

export interface Resp {
    ret: string;
    info: any;
}
@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {}

    httpServer = 'https://120.132.31.140:8888/';
    loginInfo: LoginInfo|undefined;

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
    }

    get(category: string, action: string, param: {}|null) {
        let url = this.httpServer + category + '/' + action + '?';
        if (this.loginInfo) {
            url += 'uname=' + this.loginInfo.uname + '&token=' + this.loginInfo.token + '&termtype=' + this.loginInfo.termtype + '&';
        }
        if (param) {
            url += 'value=' + encodeURIComponent(JSON.stringify(param)) + '&';
        }
        url = url.substring(0, url.length - 1);
        return this.http.get<Resp>(url)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    login(param: {}|null) {
        let url = this.httpServer + 'appIm/login?';
        if (param) {
            url += 'value=' + encodeURIComponent(JSON.stringify(param)) + '&';
        }
        url = url.substring(0, url.length - 1);
        return this.http.get<Resp>(url)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }
}
