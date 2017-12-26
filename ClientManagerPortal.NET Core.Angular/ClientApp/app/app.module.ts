import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ToastyModule} from "ng2-toasty";
import * as Raven from 'raven-js'; 

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { HomeComponent } from './components/home/home.component';
import { AppErrorHandler } from './components/app.error.handler';
import { AddClientComponent } from './components/add-client/add-client.component';


//raven.config('https://51dc6bf8c18c47fd98dae8b5c50d885a:0db5131767724e2bb72ae35f0dec7a18@sentry.io/263573').install();
Raven.config('https://51dc6bf8c18c47fd98dae8b5c50d885a@sentry.io/263573').install();

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        TaskListItemComponent,
        HomeComponent,
        AddClientComponent,
        
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
        {provide: ErrorHandler, useClass:AppErrorHandler }
    ]
})
export class AppModuleShared {
}
