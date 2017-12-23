import { ClientListService } from './../../services/client-list.service';
import { Component } from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    clients:any[]=[];
    newClient:any;
    validationMessage:string="";
    openAddClientBox=false;

    constructor(private clientList:ClientListService){
      
        this.newClient ={
            Id:0,
            Name:"",
            Projects:[]
        }
        
        this.clients = clientList.clients;
          
    }

    addClient()
    {
        
        if(this.newClient.Name==""){
          this.validationMessage="Please type something.";
          return;
        }
        var newId = this.clientList.clients[this.clientList.clients.length-1].Id +1;
        this.newClient.Id=newId;
        
        this.clientList.clients.push(this.newClient);
        
        this.newClient={
          Id:0,
          Name:"",
          Projects:[]
        }
        this.openAddClientBox=false;
    }
    DisplayAddClientBox()
    {
        this.openAddClientBox=true;
    }

    
}
