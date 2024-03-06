import {Component, inject} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {SharedService} from "../../services/shared.service";


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

  private sharedService = inject(SharedService);

  searchQuery: any;

  onSearchChange() {
    this.sharedService.setSearchQuery(this.searchQuery);
  }
}
