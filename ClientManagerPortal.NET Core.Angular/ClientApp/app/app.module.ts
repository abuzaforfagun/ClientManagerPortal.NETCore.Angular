import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ToastyModule} from "ng2-toasty"

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { HomeComponent } from './components/home/home.component';
import { AppErrorHandler } from './components/app.error.handler';




@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        TaskListItemComponent,
        HomeComponent,
        
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ToastyModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'portal', pathMatch: 'full' },
            { path: 'portal', component: HomeComponent },
            { path: 'portal/:id', component: TaskListItemComponent },
            { path: '**', redirectTo: 'portal' }
        ])
    ],
    providers:[
        {provide: ErrorHandler, useClass:AppErrorHandler}
    ]
})
export class AppModuleShared {
}
