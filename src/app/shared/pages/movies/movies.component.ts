import { Component, Input } from '@angular/core';
import { InputSearchComponent } from '../../components/input-search/input-search.component';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [InputSearchComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  @Input() placeholder: string = 'Search for movies';
}
