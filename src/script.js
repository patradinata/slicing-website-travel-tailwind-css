function toggleNavbar() {
  const navbarMobile = document.querySelector("#nav-mobile");
  const menuMobile = document.querySelector("#menu-mobile");
  const faBars = document.querySelector(".fa-bars");
  //   ketika menu mobile di klik
  menuMobile.addEventListener("click", () => {
    navbarMobile.classList.toggle("hidden");
    faBars.classList.toggle("fa-xmark");
    faBars.classList.toggle("fa-bars");
  });
}

toggleNavbar();
