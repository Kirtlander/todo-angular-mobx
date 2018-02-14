import { Injectable } from '@angular/core';


/**
 * Simple provider for middleware that logs action to console
 */
@Injectable()
export class LogAction {


  middleware = store => next => action => {

    console.log("Action logged: " + action);
    return next(action);
  }

}
