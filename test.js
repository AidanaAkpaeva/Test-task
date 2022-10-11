// connection JSON-file
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

function DATA_movies() {
  for (let film in DATA.movies) {
    // в цикле ниже добавляем все элементы в tab, а не в main__container
    for (let genre in DATA.movies[film]) {
      for (let film_info in DATA.movies[film][genre]) {
        let tab_name_movies = document.createElement('div');
        // let tab_movies_container = document.createElement('div');
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

        movies.appendChild(tab_movies_container).classList.add('tabcontent');
        tab_movies_container.appendChild(tab_name_movies).id = `tab_${genre}`;

        tab_name_movies.appendChild(main_movies).id = 'main_movies';
        main_movies.appendChild(tab_descr_movies).id = 'tab_descr_movies';

        img_movies.appendChild(img_name).type = 'button';
        img_name.classList.add('img_name');
        img_name.style.backgroundImage = DATA.movies[film][genre][film_info].url;

        tab_name_movies.appendChild(img_movies).classList.add('img_movies');

        h2.innerHTML = DATA.movies[film][genre][film_info].name;
        tab_descr_movies.appendChild(h2).classList.add('inner__title');

        li_1.innerHTML = DATA.movies[film][genre][film_info].country;
        li_2.innerHTML = DATA.movies[film][genre][film_info].genre;
        li_3.innerHTML = DATA.movies[film][genre][film_info].agelimit;
        inner__list.appendChild(li_1).classList.add('inner__item');
        inner__list.appendChild(li_2).classList.add('inner__item');
        inner__list.appendChild(li_3).classList.add('inner__item');

        for (let j in DATA.movies[film][genre][film_info].rating) {
          li_4.innerHTML = DATA.movies[film][genre][film_info].rating[j].IMBd;
          li_5.innerHTML = DATA.movies[film][genre][film_info].rating[j].Kinopoisk;
          inner__list.appendChild(li_4).classList.add('inner__item');
          inner__list.appendChild(li_5).classList.add('inner__item');
        }

        tab_descr_movies.appendChild(inner__list).classList.add('inner__list', 'list-reset');
      }
    }
  }
}

function DATA_categories() {
  for (let i in DATA.categories) {
    for (let name_categories in DATA.categories[i]) {
      let btn = document.createElement('button')
      btn.innerHTML = DATA.categories[i][name_categories];
      btn.id = `btn_${name_categories}`;
      btn.onclick = function openCategories(evt) {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        console.log(tabcontent);

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(`btn_${name_categories}`).style.display = "block";
        evt.currentTarget.className += " active";
      }

      categories.appendChild(btn).classList.add('wrapper__pagination', 'tablinks');
      let id_categories_transition = document.getElementById(`btn_${name_categories}`);
      id_categories = id_categories_transition;
    }

  }
}
function parse(obj) {
  DATA = JSON.parse(obj);
  DATA_movies();
  DATA_categories();
}



for (let film_info in DATA_movies[genre_name]) {
  let main_movies = document.createElement('div'); //контейнер для фильма
  let tab_descr_movies = document.createElement('div'); //описание фильма
  let img_name = document.createElement('input'); //картинка для фильма
  let img_movies = document.createElement('div'); //контейнер для картинки

  movies.appendChild(main_movies).id = 'main_movies';
  main_movies.appendChild(tab_descr_movies).id = 'tab_descr_movies';
  main_movies.appendChild(img_movies).id = 'img_movies';

  img_movies.appendChild(img_name).type = 'button';
  img_name.classList.add('img_name');
  img_name.style.backgroundImage = DATA_movies[genre_name][film_info].url;

  let inner__list = document.createElement('ul');
  let h2 = document.createElement('h2');
  let li_1 = document.createElement('li');
  let li_2 = document.createElement('li');
  let li_3 = document.createElement('li');
  let li_4 = document.createElement('li');
  let li_5 = document.createElement('li');


  // функция для загрузки описания фильмов
  img_name.onclick = function () {
    let items_movies_active = document.querySelectorAll('.img_name-active');
    if (items_movies_active.length > 0) {
      for (let i = 0; i < items_movies_active.length; i++) {
        items_movies_active[i].classList.remove('img_name-active');
      }
    }
    img_name.classList.add('img_name-active');

    tab_descr_movies.classList.add('tab_descr_movies');

    let items_descr = document.querySelectorAll(`.tab_descr_movies`);


    h2.innerHTML = DATA_movies[genre_name][film_info].name;
    tab_descr_movies.appendChild(h2).classList.add('inner__title');

    li_1.innerHTML = DATA_movies[genre_name][film_info].country;
    li_2.innerHTML = DATA_movies[genre_name][film_info].genre;
    li_3.innerHTML = DATA_movies[genre_name][film_info].agelimit;
    inner__list.appendChild(li_1).classList.add('inner__item');
    inner__list.appendChild(li_2).classList.add('inner__item');
    inner__list.appendChild(li_3).classList.add('inner__item');

    for (let j in DATA_movies[genre_name][film_info].rating) {
      li_4.innerHTML = DATA_movies[genre_name][film_info].rating[j].IMBd;
      li_5.innerHTML = DATA_movies[genre_name][film_info].rating[j].Kinopoisk;
      inner__list.appendChild(li_4).classList.add('inner__item');
      inner__list.appendChild(li_5).classList.add('inner__item');
    }
    tab_descr_movies.appendChild(inner__list).classList.add('inner__list', 'list-reset');

  }

}