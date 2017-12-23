import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { ClientListService } from '../../services/client-list.service';
@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {

  selectedItem:any;
  clients:any[]=[];
  newProject:any;

  constructor(private activatedRoute:ActivatedRoute, 
              private route:Router, private clientList:ClientListService ) {
    this.newProject={
      Id:0,
      Name:""
    }
    this.route.events.subscribe(path => {
      if(path.constructor.name==="NavigationEnd"){
        this.sub=this.activatedRoute.snapshot.paramMap.get('id');
        console.log("From subscribe event: " +this.sub);
        var items = clientList.clients.filter(
          client=>client.Id==this.sub
        );
        if(items.length>0){
          this.selectedItem = items[0];
        }else{
          this.selectedItem={
            Id:0,
            Name:""
          }
        }
        console.log(this.selectedItem);
      }
    });
  }

  addProject(){
    this.selectedItem.Projects.push(this.newProject);
    this.newProject={
      Id:0,
      Name:""
    }
  }
  
  id: number;
  private sub: any;
  ngOnInit() {
    
  }

}
