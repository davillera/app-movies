import { Injectable } from '@angular/core';
import algoliasearch from "algoliasearch/lite";

@Injectable({
  providedIn: 'root'
})
export class SearchAlgoliaService {

  constructor() { }

  private client = algoliasearch('XOCZ7S602O', 'b979a07d78a01bdb0367d837169d7c65');
  private index = this.client.initIndex('prod_movies');

  protected searchQuery: string = '';
  suggestions: string[] = [];

  searchMovieByQuery() {
    this.index.search(this.searchQuery)
      .then(({hits}) => {
        this.suggestions = hits.map((hit: any) => hit.title);
        console.log(hits);
      });

  }
}
