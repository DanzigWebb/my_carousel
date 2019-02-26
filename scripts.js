function myCarousel (){

var imgBox = document.getElementById('box');
imgBox.classList.add('product--sale');
var imgBoxList = imgBox.getElementsByTagName('img');

// создание обертки для картинок
for (var i = 0; i < imgBoxList.length; i++) {
  var imgBoxItem = imgBoxList[i];
  imgBoxItem.outerHTML = '<div class="carousel__item">' + imgBoxItem.outerHTML + '</div>';
  var imgWrap = imgBox.getElementsByTagName('div');
}
// присвоение ширины обертки в 1/4 предоставленного пространства
var widthImg = 0;
var heightImg = 0;


for (var j = 0; j < imgWrap.length; j++) {
  imgWrap[j].style.width = 24 + '%';
  imgWrap[j].style.float = 'left';
  // определение ширины картинки
  widthImg = imgWrap[j].offsetWidth;
  // определение высоты картинки
  heightImg = imgWrap[j].offsetHeight;
};


// расположение картинок друг за другом вправо
var imgPosition = 0;
for (var j = 1; j < imgWrap.length; j++) {
  imgPosition = imgPosition + 25;
  imgWrap[j].style.left = imgPosition + '%';
}
// задание высоты карусели в зависимости от картинок
imgBox.style.height = heightImg +'px';
// определение количество прокруток, после которой карусель возвращается в начальное положение
var carouselRepeat = -(widthImg * (imgWrap.length - 4));

// создание функции прокрутки элементов
document.getElementById('btn-left').onclick = sliderLeft;
var imgLeft = 0;
function sliderLeft () {
  var imgList = document.getElementById('box');
  imgLeft = imgLeft - widthImg;
  // перемещение карусели влево на ширину картинки и условие ее перезапуска
  if (imgLeft < carouselRepeat) {
    imgLeft = 0;
  };
  imgList.style.left = imgLeft + 'px';
}

}

myCarousel ();
