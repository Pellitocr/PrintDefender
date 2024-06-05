import { Component, OnInit } from '@angular/core';
import { MyObject } from 'src/app/models/collection.interface';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  myCollection: MyObject[] = [
    { id: 'helldivers', name: 'Helldivers', image: 'https://helldivers.wiki.gg/images/5/5e/HD2_SteamLibrary-Portrait.jpg'},
    { id: 'starwars', name: 'Star Wars', image: 'https://c8.alamy.com/comp/EC7WG1/film-poster-for-george-lucas-film-star-wars-an-american-epic-spacescience-EC7WG1.jpg' },
    { id: 'halo', name: 'Halo', image: 'https://www.dolby.com/siteassets/xf-site/content-detail-pages/halo_infinite_keyart_primary_vertical_rgb_1280x1920.jpg' },
    { id: 'fallout', name: 'Fallout', image: 'https://upload.wikimedia.org/wikipedia/vi/4/45/Fallout_4_cover.jpg' },
    { id: 'eva', name: 'Evangelion', image: 'https://i.pinimg.com/originals/ee/11/24/ee1124ff30e2a4e9127222b813801426.jpg' },
    { id: 'figures', name: 'Figures', image: 'https://ae01.alicdn.com/kf/Scbed7037302f4b4a8760ba7fc10ec5d3B/51cm-One-Piece-Action-Figure-Luffy-Shanks-Anime-Figures-Combination-New-Age-Monkey-D-Luffy-Figurine.jpg' }
  ];

  ngOnInit(): void {
 
  }

}
