import { ClientListService } from './../../services/client-list.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ClientListService]
})
export class AppComponent implements OnInit{
    constructor(private clientListService:ClientListService){}

    ngOnInit(): void {
        
    }
    

    
}
