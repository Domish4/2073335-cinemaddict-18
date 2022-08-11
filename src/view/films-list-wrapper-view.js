import { createElement } from '../render.js';

const createFilmsListWrapperTemplate = () => '<section class="films-list"></section>';

export default class filmsListWrapperView {
  getTemplate() {
    return createFilmsListWrapperTemplate();
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
