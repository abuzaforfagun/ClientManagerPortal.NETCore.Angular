import { Injectable } from '@angular/core';

@Injectable()
export class ClientListService {
  clients:any[]=[];
  constructor() { 
    this.getClient();
  }
  public getClient(){
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
  }
}
