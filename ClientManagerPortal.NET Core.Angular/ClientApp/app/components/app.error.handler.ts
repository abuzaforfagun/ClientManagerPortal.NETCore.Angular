import { ErrorHandler } from "@angular/core/src/error_handler";

export class AppErrorHandler implements ErrorHandler{
    handleError(error: any): void {
        console.log("error");
    }
    
}