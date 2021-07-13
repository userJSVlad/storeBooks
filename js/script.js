let addElementOne = document.querySelector('.add-element');
let addElementTwo = document.querySelector('.add-element-two');
let deleteBook = document.querySelector('.delete-book');
let knowInfo = document.querySelector('.know-info');


let storeOfBooks = [];

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
      return storeOfBooks;
   }
   deleteBook(elementForDelete) {
      for (let i = 0; i < storeOfBooks.length; i++) {
         if (storeOfBooks[i][0] === elementForDelete) {
            alert('Ваш элемент был успешно удалён');
            return storeOfBooks[i].splice(0, 5)
         } else {
            return console.log('такого элемента нету')
         }
      }
   }
   getAllInfo(inf) {
      for (let i = 0; i < storeOfBooks.length; i++) {
         if (storeOfBooks[i][0] === inf) {
            alert(storeOfBooks[i]);
         } else {
            return console.log('такого элемента нету')
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
   nameBook = prompt('Какую книгу удалить?', 'аватар')
   travel.deleteBook(nameBook);
}

const getInfo = (info) => {
   info = prompt('Название?', 'аватар');
   travel.getAllInfo(info);
}

knowInfo.addEventListener('click', getInfo)
deleteBook.addEventListener('click', clickDeleteBook)
addElementOne.addEventListener('click', addClickBooks)
addElementTwo.addEventListener('click', addClickComiks)

let travel = new TravelBook();
let comics = new Comics();

























