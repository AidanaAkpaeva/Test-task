// connection JSON-file
let DATA_genre;
function getFile_genre(fileName_genre) {
  let request = new XMLHttpRequest();
  request.open('GET', fileName_genre);
  request.onloadend = function () {
    parse_genre(request.responseText);
  }
  request.send();
}
getFile_genre('genre.json');//путь к файлу

let DATA;
function getFile(fileName) {
  let request = new XMLHttpRequest();
  request.open('GET', fileName);
  request.onloadend = function () {
    parse(request.responseText);
  }
  request.send();
}
getFile('data.json');//путь к файлу

// creating variables
let main__container = document.getElementById('main__container');
let categories = document.getElementById('categories');
let movies = document.getElementById('movies');

function parse_genre(obj) {

  DATA_genre = JSON.parse(obj);
  // cycle for categories
  for (let i in DATA_genre) {

    let button = document.createElement('button')
    button.innerHTML = DATA_genre[i];
    button.id = `btn_${i}`;
    button.onclick = function () {  // замена фильмов на выбранный жанр
      let id = button.id; 
      id.replace('btn_', '');// удалить первые три символа и остальное будет жанром
      main__container.innerHTML = '';
      main__container.appendChild(document.getElementById(id));
    }
    if (DATA_genre[i] == DATA_genre.detective) {
      categories.appendChild(button).classList.add('wrapper__pagination-active');
    }
    categories.appendChild(button).classList.add('wrapper__pagination');
  }
}


function parse(obj) {

  DATA = JSON.parse(obj);

  for (let genre in DATA) {
  
    // в цикле ниже добавляем все элементы в tab, а не в main__container
    for (let film_info in DATA[genre]) {
      let tab_name_movies = document.createElement('div');
      let img_movies = document.createElement('div');
      let main_movies = document.createElement('div');
      let tab_descr_movies = document.createElement('div');
      let img_name = document.createElement('input');

      let inner__list = document.createElement('ul');
      let h2 = document.createElement('h2');
      let li_1 = document.createElement('li');
      let li_2 = document.createElement('li');
      let li_3 = document.createElement('li');
      let li_4 = document.createElement('li');
      let li_5 = document.createElement('li');

      movies.appendChild(tab_name_movies).id = `tab_${genre}`;
      tab_name_movies.appendChild(main_movies).id = 'main_movies';
      main_movies.appendChild(tab_descr_movies).id = 'tab_descr_movies';

      img_movies.appendChild(img_name).type = 'button';
      img_name.classList.add('img_name');
      img_name.style.backgroundImage = DATA[genre][film_info].url;

      tab_name_movies.appendChild(img_movies).classList.add('img_movies');

      h2.innerHTML = DATA[genre][film_info].name;
      tab_descr_movies.appendChild(h2).classList.add('inner__title');

      li_1.innerHTML = DATA[genre][film_info].country;
      li_2.innerHTML = DATA[genre][film_info].genre;
      li_3.innerHTML = DATA[genre][film_info].agelimit;
      inner__list.appendChild(li_1).classList.add('inner__item');
      inner__list.appendChild(li_2).classList.add('inner__item');
      inner__list.appendChild(li_3).classList.add('inner__item');

      for (let j in DATA[genre][film_info].rating) {
        li_4.innerHTML = DATA[genre][film_info].rating[j].IMBd;
        li_5.innerHTML = DATA[genre][film_info].rating[j].Kinopoisk;
        inner__list.appendChild(li_4).classList.add('inner__item');
        inner__list.appendChild(li_5).classList.add('inner__item');
      }

      tab_descr_movies.appendChild(inner__list).classList.add('inner__list', 'list-reset');
    }

  }
}


// preloader
window.onload = function () {
  document.body.classList.add('loaded__hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded__hiding');
  }, 500);
}

// // wrapper
// let wrapper__pagination = document.getElementsByClassName('wrapper__pagination');
// let wrapper__paginationArea = document.getElementById('wrapper__pagination_block');
// let wrapper__slides = document.getElementsByClassName('wrapper__slider-item');
//   let slideIndex = 0;

// // showwrapper__Slides(slideIndex);

// function showwrapper__Slides (slideIndex) {
//     if (slideIndex < 1) {
//         slideIndex = wrapper__slider_item.length;
//     } else if (slideIndex > wrapper__slider_item.length) {
//         slideIndex = 1;
//     }
//     for (let i = 0; i < wrapper__slider_item.length; i++) {
//         wrapper__slider_item[i].style.display = 'none';
//     }
//     for (let i = 0; i < wrapper__pagination_block.length; i++) {
//         wrapper__pagination_block[i].classList.remove('wrapper__pagination-active');
//     }
//     wrapper__slider_item[slideIndex - 1].style.display = 'block';
//     wrapper__pagination_block[slideIndex - 1].classList.add('wrapper__pagination-active');
// }

// function currentSlide (n) {
//   showwrapper__Slides(slideIndex = n)
// }

// wrapper__pagination_block.onclick = function (event) {
//     for (let i = 0; i < wrapper__pagination_block.length + 1; i++) {
//         if (event.target.classList.contains('wrapper__pagination_block') && event.target == wrapper__pagination_block[i - 1]) {
//             currentSlide(i);
//         }
//     }
// }

// // inner
// let inner__pagination = document.getElementsByClassName('inner__pagination');
// let inner__slides = document.getElementsByClassName('inner__slider_item');
// let inner__paginationDetectiv = document.getElementById('padinations_block');

// let inner__slideIndex = 1;

// showinner__slides(inner__slideIndex);

// function showinner__slides (n) {
//     if (n < 1) {
//         inner__slideIndex = inner__slider_item.length;
//     } else if (n > inner__slider_item.length) {
//         inner__slideIndex = 1;
//     }
//     for (let i = 0; i < inner__slider_item.length; i++) {
//         inner__slider_item[i].style.display = 'none';
//     }
//     for (let i = 0; i < inner__pagination.length; i++) {
//         inner__pagination[i].classList.remove('inner__pagination-active');
//     }
//     inner__slider_item[inner__slideIndex - 1].style.display = 'block';
//     inner__pagination[inner__slideIndex - 1].classList.add('inner__pagination-active');
// }

// function actualSlide (n) {
//     showinner__slides(inner__slideIndex = n)
// }

// inner__pagination.onclick = function (e) {
//     for (let i = 0; i < inner__pagination.length + 1; i++) {
//         if (e.target.classList.contains('inner__pagination') && e.target == inner__pagination[i - 1]) {
//           actualSlide(i);
//         }
//     }
// }