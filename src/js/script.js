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
    item.style.transition = `0.5s all`;
  });
}

// let arr = [5, 3, 8, 1, 2, 7];
// function filterArr (array,a, b){
//   return array.filter((x) => x >= a && x <= b);
// }


// console.log(filterArr(arr, 1, 6));
// console.log(arr);



