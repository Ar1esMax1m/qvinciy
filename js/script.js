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
// Функция getListContent()
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
$(".search-wrapper input").on("input", function() {
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
var headerSearch = document.querySelector(".search-wrapper");
var search = document.querySelector(".search");

headerSearch.addEventListener("mouseover", function() {
  search.classList.add("search-active");
});
headerSearch.addEventListener("mouseout", function() {
  search.classList.remove("search-active");
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



/*  **** Меняем цвет сайта **** */
$('.color-1').on('click', function(){
  $('hr').css('background-color', '#c5994e');
  $('.arrow').css('background-color', '#c5994e');
  $('i').css('color', '#c5994e');
  $('.header-list > p').css('color', '#c5994e');
  $('.right-panel-wrapper').css('border-color', '#c5994e');
  $('.search').css('border-color', '#c5994e');
});
$('.color-2').on('click', function(){
  $('hr').css('background-color', '#fff');
  $('.arrow').css('background-color', '#fff');
  $('i').css('color', '#fff');
  $('.header-list > p').css('color', '#fff');
  $('.right-panel-wrapper').css('border-color', '#fff');
  $('.list').css('border-color', '#fff');
  $('.search').css('border-color', '#fff');
  $('.info').css('border-color', 'green');
  $('.asset-wrapper').css('border-color', 'green');
  $('.modal-content').css('border-color', 'green');
});
$('.color-3').on('click', function(){
  $('hr').css('background-color', 'green');
  $('.arrow').css('background-color', 'green');
  $('i').css('color', 'green');
  $('.header-list > p').css('color', 'green');
  $('.right-panel-wrapper').css('border-color', 'green');
  $('.list').css('border-color', 'green');
  $('.search').css('border-color', 'green');
  $('.info').css('border-color', 'green');
  $('.asset-wrapper').css('border-color', 'green');
  $('.modal-content').css('border-color', 'green');
});
$('.color-4').on('click', function(){
  $('hr').css('background-color', 'red');
  $('.arrow').css('background-color', 'red');
  $('i').css('color', 'red');
  $('.header-list > p').css('color', 'red');
  $('.right-panel-wrapper').css('border-color', 'red');
  $('.list').css('border-color', 'red');
  $('.search').css('border-color', 'red');
  $('.info').css('border-color', 'red');
  $('.asset-wrapper').css('border-color', 'red');
  $('.modal-content').css('border-color', 'red');
});
$('.color-5').on('click', function(){
  $('hr').css('background-color', 'cyan');
  $('.arrow').css('background-color', 'cyan');
  $('i').css('color', 'cyan');
  $('.header-list > p').css('color', 'cyan');
  $('.right-panel-wrapper').css('border-color', 'cyan');
  $('.list').css('border-color', 'cyan');
  $('.search').css('border-color', 'cyan');
  $('.info').css('border-color', 'cyan');
  $('.asset-wrapper').css('border-color', 'cyan');
  $('.modal-content').css('border-color', 'cyan');
});