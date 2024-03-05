import { Component } from '@angular/core';
import {SearchComponent} from "../../../shared/header/search/search.component";

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [
    SearchComponent
  ],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {

}
