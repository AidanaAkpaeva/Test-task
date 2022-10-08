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
  // creating variables
  let main__container = document.getElementById('main__container');
  let wrapper__pagination_block = document.createElement('div');
  let wrapper__slider = document.createElement('div');


function parse(obj) {

  DATA = JSON.parse(obj);

  // cycle for categories
  for (let i in DATA.categories) {
    for (let j in DATA.categories[i]) {
      let button = document.createElement('button')
      button.innerHTML = DATA.categories[i][j];
      if (DATA.categories[i][j] == DATA.categories[i].detective) {
        wrapper__pagination_block.appendChild(button).classList.add('wrapper__pagination-active');
      }
      wrapper__pagination_block.appendChild(button).classList.add('wrapper__pagination');
    }
  }

  //cycle for movie
  for (let i in DATA.detective) {
    let wrapper__slider_item = document.createElement('div');
    let padinations_block = document.createElement('div');

    let wrapper__container = document.createElement('div');
    let inner__slider = document.createElement('div');
  
    let inner__container = document.createElement('div');
    let inner__slider_item = document.createElement('div');
    let inner__list = document.createElement('ul');
    let inner__pagination = document.createElement('input');
    
    let h2 = document.createElement('h2');
    let li_1 = document.createElement('li');
    let li_2 = document.createElement('li');
    let li_3 = document.createElement('li');
    let li_4 = document.createElement('li');
    let li_5 = document.createElement('li');
    
    wrapper__slider.appendChild(wrapper__container).id = ('wrapper__container');
  
    main__container.appendChild(wrapper__slider).classList.add('wrapper__slider');


    wrapper__slider.appendChild(wrapper__pagination_block).id = ('wrapper__pagination_block');

    
    wrapper__container.classList.add('wrapper__container');
    wrapper__container.appendChild(wrapper__slider_item).classList.add('wrapper__slider_item');
    wrapper__slider_item.appendChild(inner__slider).classList.add('inner__slider');

    inner__slider.appendChild(padinations_block).id = 'padinations-block';
    inner__slider.appendChild(inner__container).classList.add('inner__container');
    inner__container.appendChild(inner__slider_item).classList.add('inner__slider_item');

    h2.innerHTML = DATA.detective[i].name;
    inner__slider_item.appendChild(h2).classList.add('inner__title');
    
    li_1.innerHTML = DATA.detective[i].country;
    li_2.innerHTML = DATA.detective[i].genre;
    li_3.innerHTML = DATA.detective[i].agelimit;
    inner__list.appendChild(li_1).classList.add('inner__item');
    inner__list.appendChild(li_2).classList.add('inner__item');
    inner__list.appendChild(li_3).classList.add('inner__item');

    for(let j in DATA.detective[i].rating) {
      li_4.innerHTML = DATA.detective[i].rating[j].IMBd;
      li_5.innerHTML = DATA.detective[i].rating[j].Kinopoisk;
      inner__list.appendChild(li_4).classList.add('inner__item');
      inner__list.appendChild(li_5).classList.add('inner__item');
      inner__slider_item.appendChild(inner__list).classList.add('inner__list', 'list-reset');
    }

    padinations_block.appendChild(inner__pagination).type = 'button';
    inner__pagination.classList.add('inner__pagination');
    inner__pagination.style.backgroundImage = DATA.detective[i].url;
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