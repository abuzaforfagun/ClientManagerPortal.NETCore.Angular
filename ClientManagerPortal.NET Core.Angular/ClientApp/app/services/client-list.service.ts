import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientListService implements OnInit{
  ngOnInit() {
    
  }
  clients:any[]=[];
  singleClient:any=null;
  constructor(private http:Http) { 
    this.http.get("http://localhost:51931/api/Clients").subscribe(res => this.clients=res.json());
  }
  public getClient(){
    
    this.http.get("http://localhost:51931/api/Clients").subscribe(res => this.clients=res.json());
  }

  public getOneClient(id:number){
    console.log("ID: "+id);
    var url = "http://localhost:51931/api/Clients/"+id;
    return this.http.get(url)
      .map(res => res.json());
  }

  public deleteClient(id:number){
    this.http.delete("http://localhost:51931/api/Clients/" + id);
  }
}
