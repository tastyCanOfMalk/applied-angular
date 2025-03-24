import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { OddEvenIndicatorComponent } from '../components/odd-even-indicator';

@Component({
  selector: 'app-demos-signals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [OddEvenIndicatorComponent],
  template: `
    <p>A Basic Signals Example</p>
    <div class="pb-4">
      <button (click)="decrement()" class="btn btn-error">-</button>
      <span class="m-4 text-md font-bold">{{ current() }}</span>
      <button (click)="increment()" class="btn btn-success">+</button>
    </div>
    @if (showReset()) {
      <button (click)="current.set(0)" class="btn btn-primary">Reset!</button>
    } @else {
      <p>Click the buttons!</p>
    }

    <div class="p-4">
      <app-odd-even-indicator [current]="current()" />
    </div>
  `,
  styles: ``,
})
export class SignalsDemoComponent {
  current = signal(0);

  showReset = computed(() => this.current() !== 0);

  decrement() {
    this.current.update((c) => c - 1);
  }
  increment() {
    this.current.update((c) => c + 1);
  }
}
