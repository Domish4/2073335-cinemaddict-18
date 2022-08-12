import RankUserView from './view/rank-user-view.js';
import SortView from './view/sort-view.js';
import { render } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';
import MainNavigationView from './view/main-navigation.view.js';
import FooterView from './view/footer-view.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');
const boardPresenter = new BoardPresenter();

render(new RankUserView(), siteHeaderElement);
render(new MainNavigationView(), siteMainElement);
render(new SortView(), siteMainElement);
render(new FooterView(), siteFooterElement);

boardPresenter.init(siteMainElement);
