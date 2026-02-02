$(document).ready(function () {
  // new WOW({
  //   boxClass: "wow",
  //   animateClass: "animated",
  //   offset: 0,
  //   mobile: true,
  //   live: false,
  // }).init();

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
    nextArrow: '<img src="img/next.svg" alt="">',
    prevArrow: '<img src="img/prev.svg" alt="">',
  });

  $(".slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: true,
          adaptiveHeight: true,
        },
      },
    ],
  });

  const mobileMenu = $(".header-mobile");
  const blurBg = $(".bg-blur");

  function showMobileMenu() {
    $("html").css("overflow-y", "hidden");
    mobileMenu.addClass("showPanel");
    blurBg.fadeIn();
  }

  function closeMobileMenu() {
    $("html").css("overflow-y", "scroll");
    mobileMenu.removeClass("showPanel");
    blurBg.fadeOut();
  }

  $("#show").click(function () {
    showMobileMenu();
  });

  $("#hide").click(function () {
    closeMobileMenu();
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".mobile-navigation").length) {
      closeMobileMenu();
    }
    e.stopPropagation();
  });

  $("a[href='#to_form']").on("click", function (event) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".toForm").offset().top,
      },
      1000
    );
  });

  $(".header-mobile a[href='#to_form']").on("click", function (event) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".toForm").offset().top,
      },
      1000
    );
    closeMobileMenu();
  });

  $("#openModalForm").click(function () {
    $(".modal-form").fadeIn();
  });

  $(".close-modal").click(function () {
    $(".modal-form").fadeOut();
  });

  let block_show = false;

  const progress1 = document.querySelector(".progressbar1 .progress");
  const progress2 = document.querySelector(".progressbar2 .progress");
  const progress3 = document.querySelector(".progressbar3 .progress");
  const progress4 = document.querySelector(".progressbar4 .progress");
  const progress5 = document.querySelector(".progressbar5 .progress");

  const counters = document.querySelectorAll(".statistic-item-progress-count");

  let procents = [95, 98, 98, 97, 94];
  let progresses = [progress1, progress2, progress3, progress4, progress5];

  progresses.forEach((progress, i) => {
    progress.style.width = procents[i] + "%";
    counters[i].textContent = procents[i] + "%";
  });
});
