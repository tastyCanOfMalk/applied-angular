import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      @switch (fizzBuzz()) {
        @case ('FizzBuzz') {
          <span class="badge badge-success">FizzBuzz</span>
        }
        @case ('Fizz') {
          <span class="badge badge-success">Fizz</span>
        }
        @case ('Buzz') {
          <span class="badge badge-success">Buzz</span>
        }
        @case ('Nada') {
          <span class="badge badge-success">Nada</span>
        }
      }
    </div>
  `,
  styles: ``,
})
export class FizzBuzzComponent {
  currentValue = input.required<number>();

  fizzBuzz = computed(() => {
    if (this.currentValue() === 0) {
      return 'Nada';
    } else if (this.currentValue() % 3 === 0 && this.currentValue() % 5 === 0) {
      return 'FizzBuzz';
    } else if (this.currentValue() % 3 === 0) {
      return 'Fizz';
    } else if (this.currentValue() % 5 === 0) {
      return 'Buzz';
    } else {
      return 'Nada';
    }
  });
}
