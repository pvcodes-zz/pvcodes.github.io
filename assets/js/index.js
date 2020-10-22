// ==========================
// Defining Variables
// ==========================
var toggle = true;
var mql = window.matchMedia("(max-width: 768px)");
var navItems = $(".navItems");
var header = $("header").height();
var section = $("section");

// ==========================
// Preloader Setting
// ==========================
setTimeout(() => {
  $("#preloader").fadeOut("slow");
}, 5000);

// ==========================
// Responsiveness to #menubar
// ==========================
navbarShowHide();

// ==========================
// Typewriter script code
// ==========================
centerTextTransition();

$(document).ready(function () {
  // Header stick on scroll
  headerSticky();

  // Smooth scroll when click on navItems
  smoothScroll();

  //bg color when click on navItems
  navItemsAnimation();
});

// ==========================
// Scroll and particular navtem styles
// ==========================
scrollJugaad();

// ==========================
// Removing scroll animation on 768px
// ==========================
mqlFunc(mql); // Call listener function at run time
mql.addListener(mqlFunc); // Attach listener function on state changes

// ==========================
// Defining Functions
// ==========================

function navbarShowHide() {
  $("#menubar").click(function () {
    $("#menubar span").removeClass("menuActive");
    $("#menubar span").addClass("menuNon");
    $("#menubar img").css("background", "#fff");

    // Toggle slideUp and down according to need
    if (toggle) {
      $("#menubar span").text("close");
      $("#navbar").slideDown("slow");
      toggle = !toggle;
    } else {
      $("#menubar span").removeClass("menuNon");
      $("#menubar span").text("menu");
      $("#navbar").slideUp("slow");
      $("#menubar span").addClass("menuActive");
      $("#menubar img").css("background", "none");
      toggle = !toggle;
    }
  });
}

// ==========================
function centerTextTransition() {
  new Typewriter("#centerText", {
    strings: ["Hello, I'm Pranjal Verma.", "A C++ Programmer. ", "& A Web Devloper Too!", "From India"],
    autoStart: true,
    loop: true,
  });
}

function headerSticky() {
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    var x = $("body").position();
    if (y > x.top) {
      $("header").fadeIn().css({ position: "sticky", top: "0" });
    } else {
      $("header").css({ position: "sticky" });
    }
  });
}

function smoothScroll() {
  $("a[href*=\\#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500
    );
  });
}
function navItemsAnimation() {
  $(document).on("click", ".navItems", function () {
    $(".navItems").removeClass("active");
    $(this).addClass("active");
  });
}

function mqlFunc(mql) {
  if (mql.matches) {
    $(".animate").removeClass("animate__animated");
  } else {
  }
}

function scrollJugaad() {
  $(document).on("scroll", function () {
    var currentScrollPos = $(document).scrollTop();

    section.each(function () {
      var self = $(this);
      if (self.offset().top < currentScrollPos + header && currentScrollPos + header < self.offset().top + self.outerHeight()) {
        var targetClass = self.attr("id");
        targetClass = "#" + targetClass.substring(0, targetClass.length - 3);
        targetClass = targetClass + " a";
        navItems.removeClass("active");
        $(targetClass).addClass("active");
      }
    });
  });
}
// -----------------------------------------------------
var isDarkMode = true;
$("#toggleKey").on("click", () => {
  if (isDarkMode) {
    $("#toggleCircle").css({
      transform: "translateX(2px)",
    });
    $("#toggleKey").css({
      background: "linear-gradient(to right, #ffeeee, #ddefbb)",
      // "linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)",
    });

    // Light Mode Styling
    $("body").addClass("whiteBody");
    $("body").css({ background: "hsl(0, 0%, 100%)" });
    $("header").css({ background: "#eee" });
    $("#navbar").css({ background: "#eee" });
    $("#centerText").css({ color: "#232323" });
    $(".navItems").css({ color: "#232323" });
    $(".fab").css({ color: "#232323" });
    $(".far").css({ color: "#232323" });
    $("#menubar span").css("color", "#232323");
    $("footer").addClass("whiteColor");
    $("#project-view-more a").css("color", "#232323");
    isDarkMode = !isDarkMode;
  } else {
    $("#toggleCircle").css({ transform: "translateX(23px)" });
    $("#toggleKey").css("background", "linear-gradient(135deg,hsl(146, 68%, 55%) 35%,  hsl(210, 78%, 56%) 100%)");
    // NormalSetting
    $("body").removeClass("whiteBody");
    $("header").css({ background: "#232323" });
    $("body").css({ background: "#232323" });
    $("#navbar").css({ background: "#232323" });
    $("#centerText").css({ color: "#fff" });
    $(".fab").css({ color: "#fff" });
    $(".far").css({ color: "#fff" });
    $(".navItems").css({ color: "#fff" });
    $("#project-view-more a").css("color", "#fff");
    isDarkMode = !isDarkMode;
  }
});
