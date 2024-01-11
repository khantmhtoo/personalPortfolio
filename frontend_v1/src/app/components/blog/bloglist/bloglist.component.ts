import { Component } from '@angular/core';

@Component({
  selector: 'app-bloglist',
  standalone: true,
  imports: [],
  templateUrl: './bloglist.component.html',
  styleUrl: './bloglist.component.scss'
})
export class BloglistComponent {
  onClick() {
    console.log("Clicked on blog")
  }
}
