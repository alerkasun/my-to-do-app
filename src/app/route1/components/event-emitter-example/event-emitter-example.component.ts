import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-event-emitter-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-emitter-example.component.html',
  styleUrl: './event-emitter-example.component.scss'
})
export class EventEmitterExampleComponent {
  @Output() onCodeEntered: EventEmitter<any> = new EventEmitter();
  @Input() code = '111'

  private currentCode = ''

  writeCode (num: number) {
    this.currentCode = `${this.currentCode}${num}`.slice(-3);
    if (this.currentCode === this.code) {
      this.onCodeEntered.emit(this.currentCode)
    }
  }
}
