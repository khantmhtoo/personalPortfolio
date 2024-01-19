import { Component } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';
import { ThemeComponent } from './theme/theme.component';

@Component({
  selector: 'app-external',
  standalone: true,
  imports: [ NotificationComponent, ThemeComponent],
  templateUrl: './external.component.html',
  styleUrl: './external.component.scss',
})
export class ExternalComponent {

}
