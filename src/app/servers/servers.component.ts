import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  counter = 0;
  allowButton = false;
  serverStatus = 'No server created!!!';
  eventButton;
  constructor() {
    setTimeout(() => {
      this.allowButton = true;
    }, 2000);
  }

  onClick($event) {
    this.serverStatus = 'Server just started!!!';
    this.eventButton = $event;
    this.counter++;
  }
  ngOnInit() {
  }
}
