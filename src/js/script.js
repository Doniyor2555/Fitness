const slides = document.querySelectorAll(".slider__offer"),
      prev = document.querySelector(".slider__prev-arrow"),
      next = document.querySelector(".slider__next-arrow");

let slideIndex = 1;

showSlides(slideIndex);


function showSlides(n) {
  if (n > slides.length) {
      slideIndex = 1;
  }
  if (n < 1) {
      slideIndex = slides.length;
  }
  slides.forEach((item) => item.style.display = 'none');
  slides[slideIndex - 1].style.display = 'block';
}

function plusSlides (n) {
  showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
  plusSlides(-1);
});

next.addEventListener('click', () =>{
  plusSlides(1);
});


// Tabs

const tabs = document.querySelectorAll(".catalog__content"),
      btn = document.querySelectorAll(".catalog__tab");

function hideTabCotent () {
  tabs.forEach(item => {
    item.style.display = 'none';
  });
  btn.forEach(item => {
    item.classList.remove("catalog__tab_active");
  }); 
}

function showTabContent (i = 0){
  tabs[i].style.display = 'flex';
  btn[i].classList.add("catalog__tab_active");
}
hideTabCotent ();
showTabContent();


function changeTabContent(){
  btn.forEach((item , i)=> {
    item.addEventListener("click", () => {
      hideTabCotent ();
      showTabContent(i);
    });
  });
}
changeTabContent();


const more = document.querySelectorAll(".catalog-item__link"),
      back = document.querySelectorAll(".catalog-item__red-link"),
      catalogContent = document.querySelectorAll(".catalog-item__content"),
      catalogList = document.querySelectorAll(".catalog-item__list"),
      catalog = document.querySelector(".catalog");



more.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
  });
});



back.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
  });
});


let target;


function moreLink(i = target){
  catalogContent.forEach(item => {
    item.addEventListener("click", (e) => {
      target = e.target;
      if(target && target.classList.contains("catalog-item__link")){
        item.style.display = 'none';
        removeLink ();
      }
    });
  });
}
moreLink();

function removeLink (){
  catalogList.forEach(i => {
    i.addEventListener("click", (e) => {
      target = e.target;
      if(target && target.classList.contains("catalog-item__red-link")){
        catalogBlock();
      }
    }); 
  });
}


function catalogBlock(){
  catalogContent.forEach(item => {
    item.style.display = 'block';
  });
}

  // Modal


const modalTrigger = document.querySelectorAll("[data-modal=consultation]"),
      overlay = document.querySelector(".overlay"),
      modal = document.querySelector("#consultation"),
      modalCloseBtn = document.querySelector(".modal__close"),
      button_mini = document.querySelectorAll(".button_mini"),
      secondModal = document.querySelector("#order");

function modalOpen(){
  overlay.classList.add("show");
  modal.classList.remove("hide");
  modal.classList.add("show");
  modal.classList.add("animation");
}

modalTrigger.forEach(item => {
  item.addEventListener("click",   modalOpen);
}); 

function closeModal(){
  overlay.classList.remove("show");
  modal.classList.add("hide");
  modal.classList.remove("show");
}
function xClose(){
  modalCloseBtn.addEventListener("click", closeModal, closeModalSecond);
}
xClose();

function openSecondModal(){
  button_mini.forEach(item => {
    item.addEventListener("click", () => {
      overlay.classList.add("show");
      secondModal.classList.add("show");
      secondModal.classList.remove("hide");
    });
  });
}

openSecondModal();

function closeModalSecond(){
  
}



xClose();



// let arr = [5, 3, 8, 1, 2, 7];
// function filterArr (array,a, b){
//   return array.filter((x) => x >= a && x <= b);
// }


// console.log(filterArr(arr, 1, 6));
// console.log(arr);