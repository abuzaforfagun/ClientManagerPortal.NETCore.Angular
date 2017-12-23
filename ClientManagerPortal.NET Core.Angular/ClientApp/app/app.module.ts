import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { PortalComponent } from './components/portal/portal.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';



@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        PortalComponent,
        TaskListItemComponent,
        
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'portal', pathMatch: 'full' },
            { path: 'portal', component: PortalComponent },
            { path: 'portal/:id', component: TaskListItemComponent },
            { path: '**', redirectTo: 'portal' }
        ])
    ]
})
export class AppModuleShared {
}
