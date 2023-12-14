import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterExampleComponent } from './event-emitter-example.component';

describe('EventEmitterExampleComponent', () => {
  let component: EventEmitterExampleComponent;
  let fixture: ComponentFixture<EventEmitterExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventEmitterExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventEmitterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
