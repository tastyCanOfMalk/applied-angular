import { signal } from '@angular/core';

export class FizzService {
  value = signal(1);

  constructor() {
    console.log('Fizz service!');
  }
  changeCountBy(value: number) {
    this.value.set(value);
  }
  // countBy(value: number) {
  //   this.value.set(value);
  // }
}
