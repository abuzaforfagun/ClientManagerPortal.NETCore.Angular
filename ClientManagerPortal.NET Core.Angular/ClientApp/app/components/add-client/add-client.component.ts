import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientListService } from '../../services/client-list.service';
import { Http } from '@angular/http';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  newClient:Client={
    id:0,
    name:"",
    projects:[]
  };
  validationMessage:string="";
  openAddClientBox=false;
  constructor(private clientList:ClientListService, 
              private http:Http,
              private toastyService:ToastyService) { 
    }
    
  ngOnInit() {
  }

  addClient()
  {
      //throw new Error();
      var newId = this.clientList.clients[this.clientList.clients.length -1].id +1;
      this.newClient.id=newId;
      this.clientList.clients.push(this.newClient);
      this.newClient={
        id:0,
        name:"",
        projects:[]
      }
      this.openAddClientBox=false;
  }
  DisplayAddClientBox()
  {
      this.openAddClientBox=true;
  }
}
