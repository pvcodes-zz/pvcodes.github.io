new Typewriter("#centerText", {
  strings: [
    "Hello, I'm Pranjal Verma.",
    "A Frontend Developer",
    "From Kannauj, India",
  ],
  autoStart: true,
  loop: true,
});

var toggle = true;

$("#menubar").click(function () {
  // styling menubar click
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
    toggle = !toggle;
  }
});
