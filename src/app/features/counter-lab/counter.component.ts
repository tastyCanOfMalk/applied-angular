import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiComponent } from './pages/ui.component';
import { PrefsComponent } from './pages/prefs';
import { FizzService } from './services/fizz';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, UiComponent, PrefsComponent],
  template: `
    <div>
      Counter Stuff Goes Here <br />
      <!-- <app-ui /> -->
      <!-- <app-prefs /> -->
      <div><a href="/counter-lab/ui">UI</a></div>
      <div><a href="/counter-lab/prefs">Prefs</a></div>
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class CounterComponent {
  //   service = inject(FizzService);
}
