import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',      //element
  // selector: '[app-servers]', //attribute
  // selector: '.app-servers',  //class
  
  // template: ` 
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
}
