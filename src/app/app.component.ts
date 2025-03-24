import { Component } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar />
    <main class="container mx-auto">
      <router-outlet />
    </main>
  `,
  styles: [],
  imports: [NavBarComponent, RouterOutlet],
})
export class AppComponent {}
