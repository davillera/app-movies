import { Component } from '@angular/core';
import {SearchComponent} from "./search/search.component";
import {ProfileComponent} from "./profile/profile.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SearchComponent,
    ProfileComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
