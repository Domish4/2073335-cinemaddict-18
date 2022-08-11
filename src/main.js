import RankUserView from './view/rank-user-view.js';
import SortView from './view/sort-view.js';
import { render } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';
import mainNavigationView from './view/main-navigation.view.js';
import FooterView from './view/footer-view.js';

const siteMainElement = document.querySelector('.main');
const headerElement = document.querySelector('.header');
const footerElement = document.querySelector('.footer');
const boardPresenter = new BoardPresenter();

render(new RankUserView(), headerElement);
render(new mainNavigationView(), siteMainElement);
render(new SortView(), siteMainElement);
render(new FooterView(), footerElement);

boardPresenter.init(siteMainElement);
