import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { MTheme } from '../../models/theme.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  _theme = inject(ThemeService);
  _cdr = inject(ChangeDetectorRef);

  public currThemeDark: MTheme = this._theme.signalThemeDark();
  public isActiveMenu: boolean = false;

  public navList: any = [
    { path: '../../../../assets/navIcons/HomeAppIcon.png', alt: 'home' },
    { path: '../../../../assets/navIcons/ProjectAppIcon.png', alt: 'project' },
    { path: '../../../../assets/navIcons/ResumeAppIcon.png', alt: 'resume' },
    { path: '../../../../assets/navIcons/ContactAppIcon.png', alt: 'contact' },
  ];

  public onActiveMenu(): void {
    this.isActiveMenu = !this.isActiveMenu;
  }
}
