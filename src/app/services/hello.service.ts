import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HelloService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/check');
  }

  sendEmailFirstWorker() {
    this.http.get('http://localhost:8080/send/0').subscribe(value => {
      console.log('Send' + value);
    });
  }

  sendEmailSecondWorker() {
    this.http.get('http://localhost:8080/send/1').subscribe(value => {
      console.log('Send' + value);
    });
  }
}
