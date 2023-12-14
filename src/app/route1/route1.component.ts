import { Component } from '@angular/core';
import {EventEmitterExampleComponent} from "./components/event-emitter-example/event-emitter-example.component";

@Component({
  selector: 'app-route1',
  standalone: true,
  imports: [
    EventEmitterExampleComponent
  ],
  templateUrl: './route1.component.html',
  styleUrl: './route1.component.scss'
})
export class Route1Component {

  allowAlert(code: number) {
    alert(`Your guessed pic code correctly ${code}`)
  }
}
