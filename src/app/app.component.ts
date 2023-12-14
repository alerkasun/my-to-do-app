import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Service1Service } from './services/service1.service';
import { Observable } from 'rxjs';

declare function $(params:any): any

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  $timer: Observable<number>;
  constructor (private service1Service: Service1Service) {
    this.$timer = this.service1Service.$timer
    console.log($('a'))
  }
  title = 'my-to-do-app';

}
