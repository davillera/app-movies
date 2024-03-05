import {Component, inject} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import algoliasearch from 'algoliasearch/lite';
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchQuery: any;





  selectSuggestion(suggestion: string) {

  }

  searchMovieByQuery() {

  }
}
