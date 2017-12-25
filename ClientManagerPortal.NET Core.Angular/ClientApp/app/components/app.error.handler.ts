import { ErrorHandler, Inject, isDevMode } from "@angular/core";
import { ToastyService } from "ng2-toasty";
import * as Raven from 'raven-js';

export class AppErrorHandler implements ErrorHandler{
    constructor(@Inject(ToastyService) private toastyService:ToastyService){

    }
    handleError(error: any): void {
        if(!isDevMode){
            Raven.captureException(error);
        }else{
            throw error;
        }
        
        this.toastyService.error({
            title:"Error",
            msg:"Something went wrong",
            theme:"Bootstrap",
            showClose:true,
            timeout:5000
        });
    }
    
}