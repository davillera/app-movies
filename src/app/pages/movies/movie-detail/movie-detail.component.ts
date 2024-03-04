import {Component, inject, Input, OnInit} from '@angular/core';
import {SharedService} from "../../../shared/services/shared.service";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit{

  @Input() selectedMovie: any;

  private sharedService = inject(SharedService);

    constructor() {
    }

    ngOnInit() {
      this.getMovieSelected();
    }

    getMovieSelected() {
      this.selectedMovie = this.sharedService.getSelectedMovie();
      // console.log(this.selectedMovie)
    }
}
