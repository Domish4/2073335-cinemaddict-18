import LoadMoreButtonView from '../view/load-more-button-view.js';
import FilmCardsView from '../view/movie-card-view.js';
import ContentView from '../view/content-view.js';
import MovieListView from '../view/movie-list-view.js';
import filmsListWrapperView from '../view/films-list-wrapper-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  contentComponent = new ContentView();
  movieListComponent = new MovieListView();
  movieWrapperComponent = new filmsListWrapperView();

  init = (contentContainer) => {
    this.contentContainer = contentContainer;

    render(this.contentComponent, this.contentContainer);
    render(this.movieWrapperComponent, this.contentComponent.getElement());
    render(this.movieListComponent, this.movieWrapperComponent.getElement());
    for (let i = 0; i < 5; i++) {
      render(new FilmCardsView(), this.movieListComponent.getElement());
    }
    render(new LoadMoreButtonView(), this.contentComponent.getElement());
  };
}
