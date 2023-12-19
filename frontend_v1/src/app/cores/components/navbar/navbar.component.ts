import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  _theme = inject(ThemeService);
  _cdr = inject(ChangeDetectorRef);

  public currTheme: any;
  public isActiveMenu: boolean = false;
  public navList: any = [
    { path: '../../../../assets/navIcons/HomeAppIcon.png', alt: 'home' },
    { path: '../../../../assets/navIcons/ProjectAppIcon.png', alt: 'project' },
    { path: '../../../../assets/navIcons/ResumeAppIcon.png', alt: 'resume' },
    { path: '../../../../assets/navIcons/ContactAppIcon.png', alt: 'contact' },
  ];

  ngOnInit() {
    this._theme.$currThemeDark.subscribe((data: any) => {
      this.currTheme = data.theme.currThemeDark;
      this._cdr.detectChanges();
    });
  }

  public onActiveMenu() {
    this.isActiveMenu = !this.isActiveMenu;
  }
}
