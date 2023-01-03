// Change navigation style on scroll
window.addEventListener("scroll", (event) => {
  let nav = document.querySelector(".navbar");

  window.scrollY >= 44
    ? nav.classList.add("scroll")
    : nav.classList.remove("scroll");
});

// Active class of menu items onscroll
window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;

  if (window.innerWidth > 0) {
    document.querySelectorAll(".change").forEach((el, i) => {
      if (
        el.offsetTop - document.querySelector(".navbar").clientHeight <=
        scrollDistance
      ) {
        document.querySelectorAll(".navbar a").forEach((el) => {
          if (el.classList.contains("active")) {
            el.classList.remove("active");
          }
        });

        document
          .querySelectorAll(".navbar li")
          [i].querySelector("a")
          .classList.add("active");
      }
    });
  }
});

// Go to top
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".go-top").show();
  } else {
    $(".go-top").hide();
  }
});
$(".go-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    smooth
  );
  return false;
});
