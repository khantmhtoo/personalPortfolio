import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuState: boolean = true;
  navItems: any[] = [
    { routePathName: 'home', iconPath: '../../../../assets/navIcons/HomeAppIcon.png' },
    { routePathName: 'about', iconPath: '../../../../assets/navIcons/ProfileAppIcon.png' },
    { routePathName: 'contact', iconPath: '../../../../assets/navIcons/ContactAppIcon.png' },
    { routePathName: 'projects', iconPath: '../../../../assets/navIcons/ProjectAppIcon.png' },
    { routePathName: 'skills', iconPath: '../../../../assets/navIcons/SkillAppIcon.png' },
    { routePathName: 'resume', iconPath: '../../../../assets/navIcons/ResumeAppIcon.png' },
  ];

  onTrigger() {
    this.menuState = !this.menuState;
    console.log(this.menuState);
  }
}
