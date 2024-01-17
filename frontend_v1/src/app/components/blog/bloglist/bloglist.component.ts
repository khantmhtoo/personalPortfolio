import { Component } from '@angular/core';

@Component({
  selector: 'app-bloglist',
  standalone: true,
  imports: [],
  templateUrl: './bloglist.component.html',
  styleUrl: './bloglist.component.scss',
})
export class BloglistComponent {
  blogList = [
    {
      id: '000000010',
      blogTitle: 'Exciting Adventures in Wonderland',
      summary:
        'Join Alice on her thrilling journey through Wonderland, encountering curious characters and magical places. This blog post explores the enchanting world beyond the rabbit hole.',
    },
    {
      id: '000000011',
      blogTitle: 'Delicious Recipes for a Cozy Evening',
      summary:
        'Discover mouth-watering recipes to make your evenings cozy and delightful. From comforting soups to decadent desserts, this blog post has it all.',
    },
  ];
  
  onClick(id: string) {
    console.log('Clicked on blog');
  }
}
