import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: [
      './portal.component.css', 
      
      ]
})
export class PortalComponent implements OnInit {
  newProject:any;
  newClient:any;
  clients:any[]=[];
  openAddClientBox=false;
  validationMessage:string="";
  selectedClient:any=null;
  clickItem(item:any){
    this.selectedClient=item;
  }

  DisplayAddClientBox(){
    this.openAddClientBox=true;
    console.log(this.openAddClientBox)
  }
  addProject(){
    this.selectedClient.Projects.push(this.newProject);
    this.newProject={
      Id:0,
      Name:""
    }
  }
  addClient(){
    if(this.newClient.Name==""){
      this.validationMessage="Please type something.";
      return;
    }
    this.clients.push(this.newClient);
    this.newClient={
      Id:0,
      Name:"",
      Projects:[]
    }
    this.openAddClientBox=false;
  }
  constructor() {
    this.newClient ={
      Id:0,
      Name:"",
      Projects:[]
    }
    this.newProject={
      Id:0,
      Name:""
    }
    var client1={
      Id:1,
      Name:"Client 1",
      Projects:[
        {
          Id: 1,
          Name: "Project 1"
        },
        {
          Id: 2,
          Name: "Project 2"
        }
      ]
    };
    var client2={
      Id:2,
      Name:"Client 2",
      Projects:[
        {
          Id: 1,
          Name: "Project 1"
        },
        {
          Id: 2,
          Name: "Project 2"
        },
        {
          Id: 3,
          Name: "Project 3"
        }
      ]
    };
    this.clients.push(client1);
    this.clients.push(client2);
    this.newProject={
      Id:0,
      Name:""
    }
   }

  ngOnInit() {
  }

}
