import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  tittle = 'adad';
  id = 1;
  flag = false;
  servers = ['A', 'B', 'C', 'D'];

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.servers.push('A');
  }
}
