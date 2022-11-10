$(function () {
  // Initialize Swiper
  var swiper1 = new Swiper(".p_list", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".sec3_next",
      prevEl: ".sec3_prev",
    },
    breakpoints: {
      700: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1350: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  var swiper2 = new Swiper(".vertical_review", {
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    direction: "vertical",
    navigation: {
      nextEl: ".sec4_next",
      prevEl: ".sec4_prev",
    },
  });

  $(".search").click(function () {
    $(".search_box").fadeIn(300);
  });
  $(".search_box > button").click(function () {
    $(".search_box").fadeOut(300);
  });

  $(".ham").click(function () {
    $(".ham_bg").fadeIn(300);
  });
  $(".ham_bg .ham_close").click(function () {
    $(".ham_bg").fadeOut(300);
  });

  $("#hd .gnb > li").mouseenter(function () {
    $(this).find(".sub").slideDown(300, "linear");
  });

  $("#hd .gnb > li").mouseleave(function () {
    $(this).find(".sub").slideUp(300, "linear");
  });

  // $(".ham_box .ham_gnb > li").mouseenter(function () {
  //   $(this).find(".ham_sub").slideDown(300, "linear");
  // });

  // $(".ham_box .ham_gnb > li").mouseleave(function () {
  //   $(this).find(".ham_sub").slideUp(300, "linear");
  // });
  // $(".product_banner li > div").mouseenter(function () {
  //   $(this).find(".hover_card").fadeIn(250);
  // });

  // $(".product_banner li > div").mouseleave(function () {
  //   $(this).find(".hover_card").fadeOut(150);
  // });

  // $(".p_list .inner").mouseenter(function () {
  //   $(this).find(".swipe_hover").fadeIn(250);
  // });

  // $(".p_list .inner").mouseleave(function () {
  //   $(this).find(".swipe_hover").fadeOut(150);
  // });
});
