let addElementOne = document.querySelector('.add-element');
let addElementTwo = document.querySelector('.add-element-two');
let deleteBook = document.querySelector('.delete-book');
let knowInfo = document.querySelector('.know-info');
let allBooks = document.getElementById('list-books');


let storeOfBooks = [];
let value = 0;

class Book {
   constructor (name, avtor, id, colOfPage) {
      this.name = name;
      this.avtor = avtor;
      this.id = ++Book.counter
      this.colOfPage = colOfPage;
   }
}

Book.counter = 0;

class TravelBook extends Book {
   constructor (tipeOfWrapper, name, avtor, id, colOfPage) {
      super(name, avtor, id, colOfPage)
      this.tipeOfWrapper = tipeOfWrapper;
   }
   addBook(nameOfBook, avtr, pages, wrap) {
      storeOfBooks.push([nameOfBook, this.id, avtr, pages, wrap]);
      console.log(storeOfBooks)
      showBookInSity();
      return storeOfBooks;
   }
   deleteBook(elementForDelete) {
      for (let i = 0; i < storeOfBooks.length; i++) {
         if (storeOfBooks[i][0] === elementForDelete) {
            alert('Ваш элемент был успешно удалён');
            storeOfBooks[i].splice(0, 5)
            console.log(storeOfBooks)
         }
      }
   }
   getAllInfo(inf) {
      for (let i = 0; i < storeOfBooks.length; i++) {
         if (storeOfBooks[i][0] === inf) {
            alert(storeOfBooks[i]);
         }
      }
   }

}

class Comics extends TravelBook {
   constructor (namberOfComics, name, avtor, id, colOfPage) {
      super(name, avtor, id, colOfPage);
      this.namberOfComics = namberOfComics;
   }
   addClickComiks(namberOfComics, avtr, pages, number) {
      storeOfBooks.push([namberOfComics, this.id, avtr, pages, number]);
      console.log(storeOfBooks)
      showBookInSity();
      return storeOfBooks;
   }
}


const addClickBooks = (event, nam, avtor, colOfPage, wrapper) => {
   event.preventDefault();
   nam = document.getElementById('title');
   avtor = document.getElementById('author');
   colOfPage = document.getElementById('count');
   wrapper = document.getElementById('type-wrapper');

   travel.addBook(nam.value, avtor.value, colOfPage.value, wrapper.value);
   nam.value = '', avtor.value = '', colOfPage.value = '', wrapper.value = '';
   alert('Успешно!');
}

const addClickComiks = (event, nam, avtor, colOfPage, nomer) => {
   event.preventDefault();
   nam = document.getElementById('title-c');
   avtor = document.getElementById('author-c');
   colOfPage = document.getElementById('count-c');
   nomer = document.getElementById('number-count');

   comics.addClickComiks(nam.value, avtor.value, colOfPage.value, nomer.value);
   nam.value = '', avtor.value = '', colOfPage.value = '', nomer.value = '';
   alert('Успешно!');
}

const clickDeleteBook = (nameBook) => {
   travel.deleteBook(nameBook);
}

const getInfo = (info) => {
   travel.getAllInfo(info);
}

const showBookInSity = () => {
   allBooks.innerHTML += `
   <ul>
      <li>${storeOfBooks[value][0]}</li>
      <li>${storeOfBooks[value][2]}</li>
      <li><button class="delete-book">удалить</button> <button class="know-info">подробнее</button></li>
   </ul>
   `
   value++
}
const delElement = (event) => {
   if (event.target.textContent !== 'удалить') {
      return
   }
   let element = event.target.parentElement.parentElement.children[0].textContent
   clickDeleteBook(element);
   event.target.parentElement.parentElement.remove();
}
const showInfo = (event) => {
   if (event.target.textContent !== 'подробнее') {
      return
   }
   let element = event.target.parentElement.parentElement.children[0].textContent
   getInfo(element)
}
allBooks.addEventListener('click', showInfo);
allBooks.addEventListener('click', delElement);
addElementOne.addEventListener('click', addClickBooks)
addElementTwo.addEventListener('click', addClickComiks)

let travel = new TravelBook();
let comics = new Comics();

























