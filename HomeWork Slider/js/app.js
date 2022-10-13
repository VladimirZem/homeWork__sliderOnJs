// Переменные
const slider = document.querySelector('.worksSlider'),
      prevBtn = document.querySelector('.btn__prev'),
      nextBtn = document.querySelector('.btn__next'),
      dots = document.querySelectorAll('.dots__btn', '.number__link')
      navSlide = document.querySelectorAll('.number__link')
let position = 0,
    dotIndex = 0
// Функции


const nextSlide = () => {                       // Объявляем константу nextSlide, которой присваиваем функцию.
  if (position < ((dots.length-1) * 1571)){     // Если, сейчас позиция  меньше индекса из массива с точекам умноженного на ширину слайда (сделали -1 так как считает не с 0, а с 1)
    position += 1571                            // тогда прибавляем +1571, тем самым пролистываем слайд вперед
    dotIndex++                                  // Также делаем +1 к Дот индексу, чтобы точки понимали, что след слайд
  } else  {                                     // Когда слайды закончились, надо чтобы на нажатия мы не смотрели пустой слайд, а вернулись на первый
    position = 0
    dotIndex = 0                                // опять же чтобы точки понимали, что происходит
  }
  slider.style.left = -position + 'px'          // Говорим, что к константе слайдер надо установить стиль влево на -позицию (смотря какой значение выше) 
                                                //и прибавить строку px.  Поставили минус, чтобы сделать инверсию
  activeSlide(dotIndex)                         // Чтобы тут взять значение dotIndex и от этого уже дать класс какой-то из точек
}
const prevSlide = () => {                        //Тут все противоположно
  if (position > 0){
    position -= 1571
    dotIndex--
  } else  {
    position = (dots.length-1) * 1571     // Чтобы с первого слайда при стрелке назад включить последний слайд, 
                                          //делаем также как и с верхней стрелкой, умножаем индекс из массива с точками на ширину слайда
    dotIndex = (dots.length-1)
  }
  slider.style.left = -position + 'px'
  activeSlide(dotIndex)

}

const activeSlide = (index) => {      // С помощь цикла forOf сначала везде удаляем active, затем смотря какой индекс, туда и добовляем его
  for (let dot of dots){
    dot.classList.remove('active')
  }
  for (let nav of navSlide){
    nav.classList.remove('active__nav')
  }
  dots[index].classList.add('active')
  navSlide[index].classList.add('active__nav')
}



// EventListeners

nextBtn.addEventListener('click', nextSlide) // Клик запускает функцию вперед
prevBtn.addEventListener('click', prevSlide) // Клик запускает функцию назад

//Функция внутри слушателя

dots.forEach((dot, index) => {                //  Цикл forEach c помощью которого, делаем работоспособность кнопок,
  dot.addEventListener('click', () => {      // позиции присваеваем значение, которое получается когда ширину слайда умножаем на индекс,  
    position = 1571 * index                   // который получаем из массива с точками
    slider.style.left = -position + 'px'
    dotIndex = index
    activeSlide(dotIndex)

  })
})

navSlide.forEach((nav, index) => {          //  Все тоже, что и сверху только для навигации
  nav.addEventListener('click', () => {
    position = 1571 * index
    slider.style.left = -position + 'px'
    dotIndex = index
    activeSlide(dotIndex)

  })
})

//////////////////////////////////////////////////////////// <3