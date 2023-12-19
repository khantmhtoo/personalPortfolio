import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './cores/components/navbar/navbar.component';
import { ThemeService } from './cores/services/theme.service';
import { MTheme } from './cores/models/theme.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  _theme = inject(ThemeService);
  _cdr = inject(ChangeDetectorRef);
  themeDark?: any;

  ngOnInit() {
    const storedTheme = localStorage.getItem('currThemeDark');
    if (storedTheme) {
      let parseTheme = JSON.parse(storedTheme) === true ? true : false;
      this._theme.prevTheme(parseTheme);
    }

    this._theme.$currThemeDark.subscribe((data: MTheme) => {
      this.themeDark = data;
      this._cdr.detectChanges();
    });
  }

  ngOnDestroy() {}
}
