import {Component, OnInit} from '@angular/core';
import {HelloService} from './services/hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HelloService]
})
export class AppComponent {
  responce: Array<any>;
  private position: number;
  private isDisable: boolean;

  constructor(private helloService: HelloService) {
  }

  send() {
    this.helloService.getAll().subscribe(value => {
      this.responce = value;
    });
  }

  sendEmailOne() {
    this.helloService.sendEmailFirstWorker();
    this.isDisable = true;
    this.disableOnTimeButton();
  }

  sendEmailTwo() {
    this.helloService.sendEmailSecondWorker();
    this.isDisable = true;
    this.disableOnTimeButton();
  }

  disableOnTimeButton() {
    setTimeout(() => {
      this.isDisable = false; }, 30000);
  }
}

