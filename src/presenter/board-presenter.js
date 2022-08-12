import ContentView from '../view/content-view.js';
import MovieListWrapperView from '../view/movie-list-wrapper-view.js';
import MovieListView from '../view/movie-list-view.js';
//import MovieCardsView from '../view/movie-cards-view.js';
import LoadMoreButtonView from '../view/load-more-button-view.js';
import { render } from '../render.js';

const MAX_MOVIE_COUNT = 5;

export default class BoardPresenter {
  contentComponent = new ContentView();
  movieListComponent = new MovieListView();
  movieWrapperComponent = new MovieListWrapperView();

  init = (contentContainer) => {
    this.contentContainer = contentContainer;

    render(this.contentComponent, this.contentContainer);
    render(this.movieWrapperComponent, this.contentComponent.getElement());
    render(this.movieListComponent, this.movieWrapperComponent.getElement());
    render(new LoadMoreButtonView(), this.contentComponent.getElement());
  };
}
