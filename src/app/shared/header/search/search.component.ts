import { Component } from '@angular/core';
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    InputTextModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

}
