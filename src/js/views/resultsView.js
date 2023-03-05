import View from './View';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query!Please try again';
  _generateMarkup() {
    console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join('');
  }
  _generateMarkupPreview(el) {
    const id = window.location.hash.slice(1);

    return `
    
  <li class="preview">
          <a class="preview__link ${
            el.id === id ? 'preview__link--active' : ''
          }" href="#${el.id}">
          
            <figure class="preview__fig">
              <img src="${el.image}" alt="recipe__img" crossorigin/>
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${el.title}</h4>
              <p class="preview__publisher">${el.publisher}</p>
              <div class="preview__user-generated">
                <svg>
                  <use href="${icons}#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
  `;
  }
}

export default new ResultsView();
