
import './style.scss';
import fetchCountries from "./fetchCountries.js";
import countryCardTpl from '../tamplates/country.hbs';
import debounce from 'lodash.debounce';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';

const refs = {
  input: document.querySelector('.js-search'),
  cardContainer: document.querySelector('.cardContainer')
}

refs.input.addEventListener('input', debounce(onSearch, 500));

function clearResult() {
  refs.input.value = '';
}

function valData(Event) {
  const countryName = Event.target.value.trim();
  if (countryName.length === 0) return clearResult();
  fetchCountries(countryName);
}

function renderCountryCards(country) {
  const markup = countryCardTpl(country);
  refs.cardContainer.innerHTML = markup;
}

function onSearch(Event) {
  
  Event.preventDefault();
  valData(Event);
  renderCountryCards();
} 

