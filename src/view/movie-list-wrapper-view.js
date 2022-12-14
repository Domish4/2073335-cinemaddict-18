import { createElement } from '../render.js';

const createViewTemplate = () => (
  `<section class="films-list">
<h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
</section>`
);

export default class MovieListWrapperView {
  getTemplate() {
    return createViewTemplate();
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
