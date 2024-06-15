// Menu players
let url = window.location.href

switch (url) {
  case 'index.html':
    window.location.href = 'goalkeepers.html'
    break;
  case 'goalkeepers.html':
    window.location.href = 'defenders.html'
    break;
  case 'defenders.html':
    window.location.href = 'midfielders.html'
    break;
  case 'midfielders.html':
    window.location.href = 'forwards.html'
    break;
  // default:
  //     window.location.href = 'index.html'
}

//Responsive Menu

let hambButton = document.querySelector("#hambButton");
let closeButton = document.querySelector("#closeButton");

let mobileMenu = document.querySelector("#mobileMenu");

hambButton.addEventListener("click", function () {
  mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("flex");
});

//Modal

let hide = document.querySelector('.hide')
let modal = document.querySelector('#modal')

let toggleModal = () => {
  modal.classList.toggle('hide')
}

