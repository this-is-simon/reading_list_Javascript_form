document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');
  form.addEventListener('submit', formSubmit);
});

const formSubmit = function(event){
  event.preventDefault();

  const bookTitle = this.title.value;
  const author = this.author.value;
  const category = document.querySelector('input[name="category"]:checked').value;
  const genreDropdown = this.genre.value;

  const loggedBookTitle = document.querySelector('#loggedTitle');
  loggedBookTitle.textContent = `Book Title: ${bookTitle}`;

  const loggedBookAuthor = document.querySelector('#loggedAuthor');
  loggedBookAuthor.textContent = `Author: ${author}`;

  const loggedCategory = document.querySelector('#loggedCategory');
  loggedCategory.textContent = `Category: ${category}`

  const loggedGenre = document.querySelector('#loggedGenre');
  loggedGenre.textContent = `Genre or Topic: ${genreDropdown}`

}
