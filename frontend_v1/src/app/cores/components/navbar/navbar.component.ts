import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { MTheme } from '../../models/theme.models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  _theme = inject(ThemeService);
  _cdr = inject(ChangeDetectorRef);

  public currThemeDark: MTheme = this._theme.signalThemeDark();
  public isActiveMenu: boolean = false;

  public navList: any = [
    {
      path: '../../../../assets/navIcons/HomeAppIcon.png',
      alt: 'home',
      pageRoute: 'dashboard',
    },
    {
      path: '../../../../assets/navIcons/BlogAppIcon.png',
      alt: 'blog',
      pageRoute: 'blog',
    },
    {
      path: '../../../../assets/navIcons/ProjectAppIcon.png',
      alt: 'project',
      pageRoute: 'project',
    },
    {
      path: '../../../../assets/navIcons/ResumeAppIcon.png',
      alt: 'resume',
      pageRoute: 'resume/detail',
    },
  ];

  public onActiveMenu(): void {
    this.isActiveMenu = !this.isActiveMenu;
  }
}
