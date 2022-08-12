import ContentView from '../view/content-view.js';
import MovieListWrapperView from '../view/movie-list-wrapper-view.js';
import MovieListView from '../view/movie-list-view.js';
import MovieCardsView from '../view/movie-cards-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import { render } from '../render.js';

const MAX_MOVIE_COUNT = 5;

export default class BoardPresenter {
  contentComponent = new ContentView();
  movieListComponent = new MovieListView();
  movieWrapperComponent = new MovieListWrapperView();


  init = (containerElement) => {
    this.containerElement = containerElement;

    for (let i = 0; i < MAX_MOVIE_COUNT; i++) {
      render(new MovieCardsView(), this.movieListComponent.getElement());
    }

    render(new ShowMoreButtonView(), this.movieListComponent.getElement());
    render(this.movieListComponent, this.movieWrapperComponent.getElement());
    render(this.movieWrapperComponent, this.contentComponent.getElement());

    render(this.contentComponent, this.containerElement);
  };
}
