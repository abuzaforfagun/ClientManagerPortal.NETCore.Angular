import { ClientListService } from './../../services/client-list.service';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ToastyService } from 'ng2-toasty';

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

    constructor(private clientList:ClientListService, 
                private http:Http,
                private toastyService:ToastyService){
      
        this.newClient ={
            id:0,
            name:"",
            projects:[]
        }
        console.log(this.clientList.clients);
    }

    addClient()
    {
        
        var newId = this.clientList.clients[this.clientList.clients.length -1].id +1;
        this.newClient.id=newId;

        this.clientList.clients.push(this.newClient);
        this.toastyService.error({
            title:"Success",
            msg:"Added successfully",
            theme:"Bootstrap",
            showClose:true,
            timeout:5000
        });
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
