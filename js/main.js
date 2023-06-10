mask('[data-tel-input]')  //Вызов маску для телефона

const phoneInputs = document.querySelectorAll('[data-tel-input]'); //fix + 

phoneInputs.forEach((input) => {      
    input.addEventListener('blur',() =>{ 
        if(input.value == '+')input.value = ''
    },false)

})


//YandexMap
let map;


  main();
  async function main() {
      // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты API
      await ymaps3.ready;

      // Создание карты
      map = new ymaps3.YMap(document.getElementById('map'), {
          location: {
              // Координаты центра карты
              // Порядок по умолчанию: «долгота, широта»
              center: [37.6155600,55.7522200],

              // Уровень масштабирования
              // Допустимые значения: от 0 (весь мир) до 21.
              zoom: 10
          }
      });
       
      // Добавляем слой для отображения схематической карты
      map.addChild(new ymaps3.YMapDefaultSchemeLayer());
      map.controls.add('searchControl');
     }