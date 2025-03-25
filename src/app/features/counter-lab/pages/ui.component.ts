import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { FizzBuzzComponent } from '../fizzBuzz';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FizzBuzzComponent],
  template: `
    <div>
      <button
        [disabled]="minValue()"
        (click)="decrease()"
        class="btn btn-primary"
      >
        -
      </button>
      <span> {{ currentValue() }}</span>
      <button (click)="increase()" class="btn btn-primary">+</button>

      <div class="p4">
        <app-fizz-buzz [currentValue]="currentValue()" />
      </div>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  currentValue = signal(0);

  minValue = computed(() => this.currentValue() <= 0);

  increase() {
    this.currentValue.update((c) => c + 1);
  }
  decrease() {
    this.currentValue.update((c) => c - 1);
  }
}
