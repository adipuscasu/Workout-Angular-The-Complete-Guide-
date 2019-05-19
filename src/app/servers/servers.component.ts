import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  serverCreationStatus = `No server was created!`;
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  isParagraphVisible = false;
  toggles = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created  Name is ${this.serverName}!`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  toggleParagraphVisibility() {
    this.isParagraphVisible = !this.isParagraphVisible;
    this.toggles.push(this.toggles.length);
  }

  getParagraphBackground(paragraphToggle: number) {
    return paragraphToggle > 4 ? 'blue' : '';
  }
}
