import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MTheme } from '../models/theme.models';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'platform',
})
export class ThemeService {
  private currThemeDark = new MTheme();
  private currThemeDarkBS = new BehaviorSubject<MTheme>(this.currThemeDark);
  public $currThemeDark = this.currThemeDarkBS.asObservable();

  public signalThemeDark = toSignal(this.currThemeDarkBS, {
    initialValue: new MTheme(),
  });

  prevTheme(theme: boolean) {
    this.currThemeDark.prevTheme(theme);
    this.currThemeDarkBS.next(this.currThemeDark);
  }

  changeTheme() {
    this.currThemeDark.updateTheme();
    this.currThemeDarkBS.next(this.currThemeDark);

    setTimeout(() => {
      localStorage.setItem(
        'currThemeDark',
        JSON.stringify(this.currThemeDark.theme.currThemeDark)
      );
    }, 0);
  }
}
