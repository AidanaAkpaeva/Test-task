

document.onkeydown = function (event) {
  switch (event.keyCode) {
     case 37:

        break;
     case 38:

        break;
     case 39:

        break;
     case 40:

      break;
  }
};


document.addEventListener('keydown', handleInputFocusTransfer);
function handleInputFocusTransfer(e) {
  var focusableElements = document.getElementsByClassName('header__item');
  var focusable = [];
  for (let i in focusableElements)
  {
    focusable.push(focusableElements[i])
  }
  var index = focusable.indexOf(document.activeElement);

  let nextIndex = 0;
  //влево
  if (e.keyCode === 37) {
    nextIndex = index > 0 ? index - 1 : 0;
    focusableElements[nextIndex].focus();
    focusableElements[nextIndex].click();
  }
  //вверх
  if (e.keyCode === 38) {
    nextIndex = index > 0 ? index - 1 : 0;
    focusableElements[nextIndex].focus();
    focusableElements[nextIndex].click();
  }
  //вправо
  if (e.keyCode === 39) {
    nextIndex = index + 1 < focusable.length ? index + 1 : index;
    focusableElements[nextIndex].focus();
    focusableElements[nextIndex].click();
  }
  //вниз
  if (e.keyCode === 40) {

  }
}


// 1) Сохранить в массив все могущие стать активными элементы

// 2) При нажатии нужной клавиши определять индекс текущего выделенного элемента в массиве

// 3) Увеличить индекс на 1, выделить следующий элемент из массива.

// 4) Если не выделен никакой элемент или последний - выделить первый (нулевой).