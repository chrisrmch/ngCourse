import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
  counter = 0;
  counterSignal = signal(this.counter);

  increment() {
    this.counter++;
    this.counterSignal.update((current) => current + 1);
  }

  decrement() {
    this.counter--;
    this.counterSignal.update((current) => current - 1);
  }

  increaseBy(value: number) {
    this.counterSignal.update((current) => current + value);
    this.counter += value;
  }
}
