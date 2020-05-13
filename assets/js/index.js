// ==========================
// Defining Variables
// ==========================
var toggle = true;

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

$("#contactForm").submit(function (e) {
  e.preventDefault();

  // var $form = $(this);
  // $.post($form.attr("action"), $form.serialize()).then(function () {
  //   alert("Thank you!");
  // });
});
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
      "From Western India",
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
      $("header").css({ position: "static" });
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
