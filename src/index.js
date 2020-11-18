
import './style.css';
import fetchCountries from "./fetchCountries.js";
import countryCardTpl from './templates/country.hbs';
import countryListTpl from './templates/countryList.hbs';
import debounce from 'lodash.debounce';
// import 'material-design-icons/iconfont/material-icons.css';
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/PNotify.css';
// import {defaults, alert} from'@pnotify/core';
import { error, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
defaults.styling = 'material';

 
defaults.icons = 'material';
defaults.width = '360px';
defaults.minHeight = '40px';
defaults.delay = '1000'; 
defaults.closer = false;
defaults.sticker = false;
defaults.addClass = 'error';


function notifyError(err) {
  error({
  text:`${err}`,
  type: 'info',
  hide: false,
  });
}


 
const refs = {
  input: document.querySelector('.js-search'),
  cardContainer: document.querySelector('.cardContainer')
}

refs.input.addEventListener('input', debounce(onSearch, 500));

function clearResult() {
  refs.input.value = '';
  refs.cardContainer.innerHTML = '';
}

const markup = '';

function renderCountryCards(country) {
  console.log(country);
  const { length } = country;
    if (length === 1) {
    renderCountry(country);
  }
    if (length > 2 & country.length < 10) {
      renderCountriesList(country);
  }
    if (length > 10) {
      notifyError('Конкретизируйте ввод, слишком мало букв для поиска');
      
  }
  console.log(markup);
}


  function renderCountry(country) {
  const markup = countryCardTpl(country);
   refs.cardContainer.innerHTML = markup;
  }

  function renderCountriesList(country) {
  const markup = countryListTpl(country);
   refs.cardContainer.innerHTML = markup;
  }



function onSearch(Event) {
  Event.preventDefault();

  const countryName = Event.target.value.trim();

  if (countryName.length === 0) return clearResult();
  
  fetchCountries(countryName)
   .then(data => renderCountryCards(data))
   .catch(error => { console.log(error) })
 
} 


