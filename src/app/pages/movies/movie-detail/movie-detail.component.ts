import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit{

  @Input() selectedMovie: any;

    constructor() {
    }

    ngOnInit() {
      console.log(this.selectedMovie)
    }
}
