console.clear();

const themeBtn = document.querySelector(".c-theme-btn");

const changeTheme = () => {
  document.documentElement.classList.toggle("theme--night");
  let state = document.documentElement.classList.contains("theme--night");
  state ? themeBtn.classList.add("is-active") : themeBtn.classList.remove("is-active");
};
