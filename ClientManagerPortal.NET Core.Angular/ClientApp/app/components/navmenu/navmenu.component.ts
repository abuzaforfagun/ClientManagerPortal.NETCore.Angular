import { Component } from '@angular/core';
import * as myGlobals from '../globalvariable'; //<==== this one

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

    addClient()
    {
        
        if(this.newClient.Name==""){
          this.validationMessage="Please type something.";
          return;
        }
        var newId = myGlobals.clients[myGlobals.clients.length-1].Id +1;
        this.newClient.Id=newId;
        
        myGlobals.clients.push(this.newClient);
        
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

    constructor(){
      
        this.newClient ={
            Id:0,
            Name:"",
            Projects:[]
        }
        
        this.clients = myGlobals.clients;
          
    }
}
