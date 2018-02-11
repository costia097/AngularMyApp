import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HelloService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/check');
  }

  sendEmail(position) {
    this.http.get('http://localhost:8080/send' + '/' + position).subscribe(value => {
      console.log('Send' + value);
    });
  }

}
