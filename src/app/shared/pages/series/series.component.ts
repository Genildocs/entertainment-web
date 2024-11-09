import { Component, Input } from '@angular/core';
import { InputSearchComponent } from '../../components/input-search/input-search.component';
@Component({
  selector: 'app-series',
  standalone: true,
  imports: [InputSearchComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent {
  @Input() placeholder: string = 'Search for series';
}
