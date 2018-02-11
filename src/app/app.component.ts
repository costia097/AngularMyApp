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

  sendEmail() {
    if (this.position == null) {
      return;
    }
    this.helloService.sendEmail(this.position);
    this.isDisable = true;
    this.disbleOnTimeButton();
  }

  disbleOnTimeButton() {
    setTimeout(() => {
      this.isDisable = false; }, 20000);
  }
}

