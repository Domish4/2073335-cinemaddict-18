import { createElement } from '../render.js';

const createMovieListView = () => '<div class="films-list__container"></div>';

export default class MovieListView {
  getTemplate() {
    return createMovieListView();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
