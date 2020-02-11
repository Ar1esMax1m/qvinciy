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

$(".right-panel-header-fraction").on("click", function() {
  $(".right-panel-dop-wrapper").addClass("open-right-panel");
});
$(".right-panel-header-prof").on("click", function() {
  $(".right-panel-dop-wrapper").removeClass("open-right-panel");
});

$(".home-link").on("click", function() {
  $(".right-panel-wrapper").addClass("open-right-panel");
});
$(".close-panel").on("click", function() {
  $(".right-panel-wrapper").removeClass("open-right-panel");
});
