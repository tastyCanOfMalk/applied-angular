import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ThemeComponent } from '../../components/theme';

@Component({
  selector: 'app-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ThemeComponent],
  template: `
    <h2>Yo Profile</h2>
    <div>
      <app-profile-theme />
    </div>
  `,
  styles: ``,
})
export class ProfileComponent {}
