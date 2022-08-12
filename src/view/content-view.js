import { createElement } from '../render.js';

const createViewTemplate = () => '<section class="films"></section>';

export default class ContentView {
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
