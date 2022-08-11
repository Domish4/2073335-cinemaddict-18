import {createElement} from '../render.js';

const createLoadMoreButtonView = () => '<button class="films-list__show-more">Show more</button>';

export default class LoadMoreButtonView {
  getTemplate() {
    return createLoadMoreButtonView();
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
