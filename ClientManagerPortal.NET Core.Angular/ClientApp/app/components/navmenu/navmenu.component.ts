import { ClientListService } from './../../services/client-list.service';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit {
    tmpclients:any[]=[];
    ngOnInit(): void {
        
        this.clients = this.clientList.clients;

    }
    clients:any[]=[];
    newClient:any;
    validationMessage:string="";
    openAddClientBox=false;

    constructor(private clientList:ClientListService, private http:Http){
      
        this.newClient ={
            id:0,
            name:"",
            projects:[]
        }
        console.log(this.clientList.clients);
    }

    addClient()
    {
        
        if(this.newClient.Name==""){
          this.validationMessage="Please type something.";
          return;
        }
        var newId = this.clientList.clients[this.clientList.clients.length -1].id +1;
        this.newClient.id=newId;
        console.log(this.clientList.clients);
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
