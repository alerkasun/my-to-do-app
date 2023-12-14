import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  private timer = new BehaviorSubject(0)

  constructor() {
    setInterval(() => {
      this.timer.next(Math.round(performance.now() / 1000))
    }, 200)
   }

   get $timer () {
    return this.timer.asObservable()
   }



}
