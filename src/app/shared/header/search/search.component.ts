import {Component, inject} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import algoliasearch from 'algoliasearch/lite';




@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  protected searchQuery: string = '';
  private client = algoliasearch('XOCZ7S602O', 'b979a07d78a01bdb0367d837169d7c65');
  private index = this.client.initIndex('prod_movies');

  searchMovieByQuery() {
    this.index.search(this.searchQuery).then(({hits}) => {
      console.log(hits);
    });

  }

}
