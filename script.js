const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

button.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

const languageButtons = document.querySelectorAll('.lang');
const translatable = document.querySelectorAll('[data-sl][data-en]');

function setLanguage(lang) {
  document.documentElement.lang = lang;
  translatable.forEach(element => {
    element.textContent = element.dataset[lang];
  });
  languageButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });
  localStorage.setItem('lalani-language', lang);
}

languageButtons.forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem('lalani-language') || 'sl');
