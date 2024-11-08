import { Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { MoviesComponent } from './shared/pages/movies/movies.component';
import { SeriesComponent } from './shared/pages/series/series.component';
import { BookmarkComponent } from './shared/pages/bookmark/bookmark.component';
export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'movies',
    title: 'Movies',
    component: MoviesComponent,
  },
  {
    path: 'series',
    title: 'Series',
    component: SeriesComponent,
  },
  {
    path: 'bookmark',
    title: 'Bookmark',
    component: BookmarkComponent,
  },
];
