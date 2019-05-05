$(document).ready(function () {
  let carousel = function () {

    // первоначальная разметка
    $('.carousel-content img').wrap("<div class='carousel-item'></div>");
    $('.slider').append("<button class='carousel-prev'>Prev</button>");
    $('.slider').append("<button class='carousel-next'>Next</button>");

    // объявление переменных
    let carouselWrapper = $('.carousel-wrapper');
    let carouselContent = $('.carousel-content');
    let carouselItem = $('.carousel-item');

    let prevBtn = $('.carousel-prev')
    let nextBtn = $('.carousel-next')
    let sliderWidth = carouselWrapper.width();
    let carouselStep = sliderWidth / 2;


    let logCarousel = function () {
      // определение шага слайдера
      let sliderWidth = carouselWrapper.width();
      let carouselStep = sliderWidth / 2;
      carouselItem.width(carouselStep)

      // минимальная ширина карусели
      // определение мин ширины как сумма ширины всех дочерних элементов
      let carouselWidth = 0;
      $.each(carouselItem, function () {
        carouselWidth += 1.5 * carouselItem.width();
      })

      // объявление ширины
      carouselContent.width(carouselWidth)
      carouselContent.height(carouselItem.height())

      // логика
      let carouselCurrent = 0;
      nextBtn.on('click', function () {
        carouselContent.css("right", carouselCurrent + carouselStep + "px");
        carouselCurrent += carouselStep;
      })

      prevBtn.on('click', function () {
        carouselContent.css("right", carouselCurrent - carouselStep + "px");
        carouselCurrent -= carouselStep;


      })
      
      $(window).resize(function () {
        logCarousel();
      });
    }

    logCarousel()
    

    



  }
  carousel()
 

});
