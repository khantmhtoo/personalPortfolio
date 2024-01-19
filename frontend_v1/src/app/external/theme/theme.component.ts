import { Component, inject } from '@angular/core';
import { ThemeService } from '../../cores/services/theme.service';
import { MTheme } from '../../cores/models/theme.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent {
  _theme = inject(ThemeService);
  currThemeDark: MTheme = this._theme.signalThemeDark();


  updateTheme() {
    this._theme.changeTheme();
  }
}
