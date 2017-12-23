import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Http } from '@angular/http';

@Injectable()
export class ClientListService implements OnInit{
  ngOnInit() {
    
  }
  clients:any[]=[];
  constructor(private http:Http) { 
    this.http.get("http://localhost:51931/api/Clients").subscribe(res => this.clients=res.json());
  }
  public getClient(){
    
    this.http.get("http://localhost:51931/api/Clients").subscribe(res => this.clients=res.json());
    
    
    /*
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
    */
  }

  public deleteClient(id:number){
    this.http.delete("http://localhost:51931/api/Clients/" + id);
  }
}
