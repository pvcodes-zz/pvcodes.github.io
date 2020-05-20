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
$(window).on("load", function () {
  $("#preloader").fadeOut("slow");
});

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
    $("#menubar span").css({
      color: "black",
      background: "white",
      "border-radius": "1px",
      transform: "scale(1.5) translateX(-5px)",
    });
    $("#menubar img").css("background", "#fff");

    // Toggle slideUp and down according to need
    if (toggle) {
      $("#menubar span").text("close");
      $("#navbar").slideDown("slow");
      toggle = !toggle;
    } else {
      $("#menubar span").text("menu");
      $("#navbar").slideUp("slow");
      $("#menubar span").css({
        color: "#ffffff",
        background: "none",
        transform: "scale(1) translateX(0px)",
      });
      $("#menubar img").css("background", "none");
      toggle = !toggle;
    }
  });
}

// ==========================
function centerTextTransition() {
  new Typewriter("#centerText", {
    strings: [
      "Hello, I'm Pranjal Verma.",
      "A Frontend Developer.",
      "From India",
    ],
    autoStart: true,
    loop: true,
  });

  new Typewriter("#blogSoon", {
    strings: ["Comming Soon.", "Stay tuned. ;)"],
    autoStart: true,
    loop: true,
  });

  new Typewriter("#projectSoon", {
    strings: ["Uploading Soon.", "Stay tuned. ;)"],
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
      if (
        self.offset().top < currentScrollPos + header &&
        currentScrollPos + header < self.offset().top + self.outerHeight()
      ) {
        var targetClass = self.attr("id");
        targetClass = "#" + targetClass.substring(0, targetClass.length - 3);
        targetClass = targetClass + " a";
        navItems.removeClass("active");
        $(targetClass).addClass("active");
      }
    });
  });
}
