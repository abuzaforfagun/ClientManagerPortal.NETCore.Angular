import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { ClientListService } from '../../services/client-list.service';
import { Project } from '../../models/project';
import { Client } from '../../models/client';
@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit{

  ngOnInit(): void {
    
    
  }
  idFromParm:number;
  selectedClient:Client;
  clients:Client[]=[];
  newProject:Project;

  constructor(private activatedRoute:ActivatedRoute, 
              private route:Router, private clientList:ClientListService ) {
    this.newProject={
      id:0,
      name:""
    }
    activatedRoute.params.subscribe(p => {
      this.idFromParm = +p['id'] || 0;
      this.clientList.getOneClient(this.idFromParm)
      .subscribe(
        v => {
          this.selectedClient = v;
        },
        err => {
          
          if (err.status == 404) {
            this.route.navigate(['/portal']);
            return; 
          }
        });  
    });
  }

  addProject(){
    this.selectedClient.projects.push(this.newProject);
    this.newProject={
      id:0,
      name:""
    }
    this.clientList.deleteClient(1);
  }
  
  id: number;
  private sub: any;
}