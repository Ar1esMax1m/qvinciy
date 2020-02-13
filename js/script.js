/*  ****Подвал**** */
// подвал открывается
function footerUp() {
  document.getElementById("footer").classList.remove("footer");
  document.getElementById("footer").classList.add("open");
  document.getElementById("line").classList.add("after-line");
  document.getElementById("line").classList.remove("before-line");
}
// подвал закрывается
function footerDown() {
  document.getElementById("footer").classList.add("footer");
  document.getElementById("footer").classList.remove("open");
  document.getElementById("line").classList.remove("after-line");
  document.getElementById("line").classList.add("before-line");
}

//добавляем текст при наведении 
function rightTextAdd(){
let p = $('.right-footer-description-p');
p.html('Пользовательского соглашения является совершение действий Пользователем, которые направлены на использование Сайта, включая, но не ограничиваясь: подача, просмотр, оплата услуг, участие в рейтинге, направление сообщений Администрации сайта, и иные действия по использованию функциональности Сайта. Владелец сайта в сети интеренет имеет право в любое время в одностороннем порядке вносить изменения в Пользовательское соглашения без какого-либо специального уведомления об этом Пользователя. Новая редакция Пользовательского соглашения ');
$('.center-footer-description').css('width', '270px');
$('.left-footer-description').css('width', '270px');
$('.right-footer-description').css('width', '641px');
}
function centerTextAdd(){
  let p = $('.center-footer-description-p');
  p.html('Настоящий договор между владельцем сайта в сети интернет Гаврилова Никиты Александровича и пользователем услуг сайта в сети интернет, именуемым в дальнейшем «Покупатель» определяет условия приобретения услуги через сайт <br \/> 1. ОБЩИЕ ПОЛОЖЕНИЯ <br \/> 1.1. Владелец сайта в сети интернет публикует настоящий договор, являющийся публичным');
  $('.right-footer-description').css('width', '270px');
  $('.left-footer-description').css('width', '270px');
  $('.center-footer-description').css('width', '641px');
}
//удаляем текст при наведении
function rightTextDelete(){
  let p = $('.right-footer-description-p');
  p.html('Настоящее Пользовательское соглашение регулирует отношения между пользователем сети Интернет (далее - Пользователь) и владельцем сайта в сети интернет http://qvinciy.ru, возникающие при использовании интернет-ресурса http://qvinciy.ru, на условиях,  указанных в Пользовательском соглашении.');
  $('.center-footer-description').css('width', '400px');
  $('.left-footer-description').css('width', '400px');
  $('.right-footer-description').css('width', '400px');
}
function centerTextDelete(){
  let p = $('.center-footer-description-p');
  p.html('Настоящий договор между владельцем сайта в сети интернет Гаврилова Никиты Александровича и пользователем услуг сайта в сети интернет, именуемым в дальнейшем «Покупатель» определяет условия приобретения услуги через сайт http://qvinciy.ru Настоящий договор – оферта действует с 01 Августа 2019 года.');
  $('.right-footer-description').css('width', '400px');
  $('.left-footer-description').css('width', '400px');
  $('.center-footer-description').css('width', '400px');
}
//модальное окно
$('.modal-footer-link').on('click', function(){
let modal = $('.modal-footer');
modal.css('opacity', '1')
modal.css('pointer-events', 'auto');
});
$('.close-footer').on('click', function(){
  let modal = $('.modal-footer');
  modal.css('opacity', '0')
  modal.css('pointer-events', 'none');
});
//скрываем окно при клике за его пределами
$(document).mouseup(function (e){ // событие клика по веб-документу
  var div = $(".modal-content-footer"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам

        let modal = $('.modal-footer');
        modal.css('opacity', '0')
        modal.css('pointer-events', 'none');// скрываем его
  }
});


/*  ****Список**** */
// Открытие списка
function listOpen() {
  document.getElementById("content-list").classList.add("content-list-open");
  document
    .getElementById("content-list")
    .classList.remove("content-list-hidden");
}
/*  ****Заполнение списка**** */
// Функцию getListContent() - активировать + закоментить блок nomen_2
/*
var content = document.querySelector(".modal-content");
var container = document.querySelector(".modal-container");
var inf = document.querySelector(".dop-inf");
var infoLogo = document.querySelector(".info-logo");

infoLogo.addEventListener("click", function() {
  content.classList.toggle("modal-content-full");
  container.classList.toggle("modal-container-full");
  inf.classList.toggle("dop-inf-full");
});
*/
// Функцию getListContent() - отключить
$("#nomen_1").on("click", function() {
  $(".nomen_1").css("display", "block");
  $(".nomen_2").css("display", "none");
});

$("#nomen_2").on("click", function() {
  $(".nomen_2").css("display", "block");
  $(".nomen_1").css("display", "none");
});
$(".info-logo").on("click", function() {
  $(".dop-inf").toggleClass("dop-inf-full");
  $(".modal-content").toggleClass("modal-content-full");
  $(".modal-container").toggleClass("modal-container-full");
});
$(".close").on("click", function() {
  $(".dop-inf").removeClass("dop-inf-full");
  $(".modal-content").removeClass("modal-content-full");
  $(".modal-container").removeClass("modal-container-full");
});

//скрываем окно при клике за его пределами
$(document).mouseup(function (e){ // событие клика по веб-документу
  var div = $(".modal-dialog"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам

      location.hash = '#close';
  }
});
/*
function getListContent() {
  let fragment = new DocumentFragment();

  for (let i = 1; i <= 11; i++) {
    let li = document.createElement("li");
    //li.append(left-number);
    li.append(wrapperLi.cloneNode(true));
    fragment.append(li);
  }

  return fragment;
}
ul.append(getListContent()); // (*)
*/

/*  ****Панели**** */
// Левая панель
var panel = document.querySelector(".left-panel-wrapper");
var arrow = document.querySelector(".arrow");
var arrowI = document.querySelector(".fa-sort-down");
panel.addEventListener("mouseover", function() {
  panel.classList.add("active");
  arrow.classList.add("arrow-active");
  arrowI.classList.add("arrow-i-active");
});
panel.addEventListener("mouseout", function() {
  panel.classList.remove("active");
  arrow.classList.remove("arrow-active");
  arrowI.classList.remove("arrow-i-active");
});

/*  **** Поиск **** */
// Поиск по списку
$(".search").on("input", function() {
  var str = $(this)
    .val()
    .toLowerCase();
  if (str.length <= 0) {
    $(".ul > li").show();
  } else {
    $(".ul > li").each(function() {
      if (
        $(this)
          .text()
          .toLowerCase()
          .indexOf(str) < 0
      ) {
        $(this).hide();
      }
    });
  }
});
// Открытие поиска
$('.search-link').on('mouseover', function(){
  $('.search-link').html('Поиск');
});
$('.search-link').on('mouseout', function(){
  $('.search-link').html('Номен');
});
$('.search').on('mouseout', function(){
  $('.search').css('opacity', '0');
  $('.search').css('pointer-events', 'none');
});
$('.search-link').on('click', function(){
  $('.search').css('opacity', '1');
  $('.search').css('pointer-events', 'auto');
  $('.search').focus();
});


/*  **** Регистрация **** */
// добавление поля регистрации
$(".reg").on("click", function() {
  $(".hidden").addClass("hide");
  $(".sign-in").html("РЕГИСТРАЦИЯ");
  $(".reg").css("display", "none");
  $(".signIn").addClass("signInOpen");
});
// удаление поля регистрации
$(".signIn").on("click", function() {
  $(".hidden").removeClass("hide");
  $(".sign-in").html("ВОЙТИ");
  $(".reg").css("display", "block");
  $(".signIn").removeClass("signInOpen");
});


/*  **** Личный кабинет **** */
//открываем ЛК фракции
$(".right-panel-header-fraction").on("click", function() {
  $(".right-panel-dop-wrapper").addClass("open-right-panel");
  $(".right-panel-dop-wrapper").addClass("flipInX");
  $(".right-panel-dop-wrapper").removeClass("flipOutX");
});
//закрываем ЛК фракции
$(".right-panel-header-prof").on("click", function() {
  $(".right-panel-dop-wrapper").removeClass("flipInX");
  $(".right-panel-dop-wrapper").addClass("flipOutX");
});
//открываем и закрываем ЛК
$(".home-link").on("click", function() {
  $(".right-panel-wrapper").addClass("open-right-panel");
  $(".right-panel-wrapper").addClass("bounceInRight");
  $(".right-panel-wrapper").removeClass("bounceOutRight");
});
$(".close-panel").on("click", function() {
  $(".right-panel-wrapper").removeClass("bounceInRight");
  $(".right-panel-wrapper").addClass("bounceOutRight");
});



