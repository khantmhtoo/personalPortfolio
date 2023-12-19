import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeService } from '../cores/services/theme.service';
import { MTheme } from '../cores/models/theme.models';

@Component({
  selector: 'app-external',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './external.component.html',
  styleUrl: './external.component.scss',
})
export class ExternalComponent {
  _theme = inject(ThemeService);
  currThemeDark?: MTheme;

  constructor() {
    this._theme.$currThemeDark.subscribe((data: MTheme) => {
      this.currThemeDark = data;
    });
  }

  updateTheme() {
    this._theme.changeTheme();
    console.log(this.currThemeDark)
  }
}
