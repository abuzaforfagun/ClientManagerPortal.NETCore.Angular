import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { ClientListService } from '../../services/client-list.service';
@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent{

  selectedItem:any;
  clients:any[]=[];
  newProject:any;

  constructor(private activatedRoute:ActivatedRoute, 
              private route:Router, private clientList:ClientListService ) {
    this.newProject={
      id:0,
      name:""
    }
    
    this.route.events.subscribe(path => {
      if(path.constructor.name==="NavigationEnd"){
        this.sub=this.activatedRoute.snapshot.paramMap.get('id');
      }
      this.clientList.getOneClient(this.sub)
      .subscribe(
        v => this.selectedItem = v,
        err => {
          if (err.status == 404) {
            this.route.navigate(['/vehicles']);
            return; 
          }
        });
    });
  }

  addProject(){
    this.selectedItem.projects.push(this.newProject);
    this.newProject={
      id:0,
      name:""
    }
    
    this.clientList.deleteClient(1);
    console.log(this.clientList.clients);
  }
  
  id: number;
  private sub: any;
}