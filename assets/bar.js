const cardContainer = document.querySelector('.card-container');
let startX;
let scrollLeft;

cardContainer.addEventListener('mousedown', (e) => {
  startX = e.pageX - cardContainer.offsetLeft;
  scrollLeft = cardContainer.scrollLeft;
  cardContainer.style.cursor = 'grabbing';
});

cardContainer.addEventListener('mouseleave', () => {
  cardContainer.style.cursor = 'grab';
});

cardContainer.addEventListener('mouseup', () => {
  cardContainer.style.cursor = 'grab';
});

cardContainer.addEventListener('mousemove', (e) => {
  if (!startX) return;
  e.preventDefault();
  const x = e.pageX - cardContainer.offsetLeft;
  const walk = (x - startX) * 2; // Przyspiesza przewijanie
  cardContainer.scrollLeft = scrollLeft - walk;
});

// Obsługa dotyku (dla urządzeń mobilnych)
cardContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX - cardContainer.offsetLeft;
  scrollLeft = cardContainer.scrollLeft;
});

cardContainer.addEventListener('touchmove', (e) => {
  if (!startX) return;
  e.preventDefault();
  const x = e.touches[0].pageX - cardContainer.offsetLeft;
  const walk = (x - startX) * 2; // Przyspiesza przewijanie
  cardContainer.scrollLeft = scrollLeft - walk;
});

var params = new URLSearchParams(window.location.search);

function sendTo(url){
    location.href = `/${url}?` + params;
}

document.querySelectorAll(".bottom_element_grid").forEach((element) => {
    element.addEventListener('click', () => {
        sendTo(element.getAttribute("send"))
    })
})

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (/windows phone/i.test(userAgent)) {
        return 1;
    }
  
    if (/android/i.test(userAgent)) {
        return 2;
    }
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 3;
    }
  
    return 4;
  }
  
  if (getMobileOperatingSystem() == 2){
      document.querySelector(".bottom_bar").style.height = "70px"
}