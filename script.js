
  const navLinks = document.querySelectorAll('nav a');
  const products = document.querySelectorAll('.product');
  
  // Анимация при наведении на ссылки в навигации
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'rotate(360deg)';
    });
  
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'rotate(0deg)';
    });
  });
  
  // Обработка событий клавиатуры
  document.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
      alert('Вы нажали кнопку Escape');
    }
  });
  
  // Обработка событий мыши
  products.forEach(product => {
    const img = product.querySelector('img');
    const buyButton = product.querySelector('button');
  
    img.addEventListener('click', () => {
      alert(`Вы выбрали ${product.querySelector('h3').textContent}`);
    });
  
    buyButton.addEventListener('click', () => {
      alert(`Вы купили ${product.querySelector('h3').textContent}`);
    });
  });

  

  JavaScript:

// Получаем элементы кнопки "Edit Profile" и изображения профиля
var editButton = document.querySelector('.profile button');
var profileImage = document.querySelector('.profile img');

// Добавляем обработчик клика на кнопку "Edit Profile", который выводит сообщение в консоль
editButton.addEventListener('click', function() {
  console.log('Edit Profile clicked!');
});

// Добавляем обработчики на изображение профиля для изменения стилей при наведении и нажатии мыши
profileImage.addEventListener('mouseover', function() {
  this.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.5)';
});

profileImage.addEventListener('mouseout', function() {
  this.style.boxShadow = 'none';
});

profileImage.addEventListener('mousedown', function() {
  this.style.transform = 'scale(0.9)';
});

// Добавляем обработчик на нажатие клавиши 'Enter' на кнопке "Edit Profile", который вызывает клик на кнопке
editButton.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    this.click();
  }
});
var energyWord = document.querySelector('h1');

energyWord.addEventListener('mouseover', function() {
  energyWord.classList.add('e');
});

energyWord.addEventListener('mouseout', function() {
  energyWord.classList.remove('e');
});

energyWord.addEventListener('mousedown', function() {
  energyWord.classList.add('n');
});

energyWord.addEventListener('mouseup', function() {
  energyWord.classList.remove('n');
});
energyWord.addEventListener('mousedown', function() {
  energyWord.classList.add('r');
});

energyWord.addEventListener('mouseup', function() {
  energyWord.classList.remove('r');
});
energyWord.addEventListener('mousedown', function() {
  energyWord.classList.add('g');
});

energyWord.addEventListener('mouseup', function() {
  energyWord.classList.remove('g');
});
energyWord.addEventListener('mousedown', function() {
  energyWord.classList.add('y');
});

energyWord.addEventListener('mouseup', function() {
  energyWord.classList.remove('y');
});
var track = document.querySelector('.carousel__track');
var slides = Array.from(track.children);
var prevButton = document.querySelector('.carousel__button--left');
var nextButton = document.querySelector('.carousel__button--right');
var slideWidth = slides[0].getBoundingClientRect().width;

// Размещаем слайды друг за другом
var setSlidePosition = function(slide, index) {
  slide.style.left = index * slideWidth + 'px';
};

slides.forEach(setSlidePosition);

// Перемещение к следующему слайду
var moveToSlide = function(track, currentSlide, targetSlide) {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// Работа кнопки "Next"
nextButton.addEventListener('click', function() {
  var currentSlide = track.querySelector('.current-slide');
  var nextSlide = currentSlide.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);
});

// Работа кнопки "Prev"
prevButton.addEventListener('click', function() {
  var currentSlide = track.querySelector('.current-slide');
  var prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
});

		var slideIndex = 1;
		showSlides(slideIndex);
		
		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}
		
		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}
		
		function showSlides(n) {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  var dots = document.getElementsByClassName("dot");
		  if (n > slides.length) {slideIndex = 1}    
		  if (n < 1) {slideIndex = slides.length}
		  for (i = 0; i < slides.length; i++) {
			  slides[i].style.display = "none";  
		  }
		  for (i = 0; i < dots.length; i++) {
			  dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block";  
		  dots[slideIndex-1].className += " active";
		}
		 