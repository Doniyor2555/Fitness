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
      secondModal = document.querySelector("#order"),
      closeSecond = document.querySelector("#closeSecond"),
      text = document.querySelector("#order .modal__descr_name"),
      data = document.querySelectorAll(".catalog-item__subtitle"),
      modal__descr_name = document.querySelector(".modal__descr_name"),
      catalogItem = document.querySelectorAll(".catalog-item");
let textContent;

    
data.forEach(item => {
  textContent = item.textContent;
 
});

function modalOpen(){
  overlay.classList.add("show");
  modal.classList.remove("hide");
  modal.classList.add("show");
  modal.classList.add("animation");
}

modalTrigger.forEach(item => {
  item.addEventListener("click", () => {
    modalOpen();
    modal__descr_name.innerHTML = "и мы перезвоним вам в течении 10 минут";
  }); 
}); 

function closeModal(){
  overlay.classList.remove("show");
  modal.classList.add("hide");
  modal.classList.remove("show");
}
function xClose(){
  modalCloseBtn.addEventListener("click", closeModal);
}
xClose();

function openSecondModal(){
      overlay.classList.add("show");
      secondModal.classList.add("show");
      secondModal.classList.remove("hide");
}


function closeModalSecond(){
  overlay.classList.remove("show");
  secondModal.classList.add("hide");
  secondModal.classList.remove("show");
} 

closeSecond.addEventListener("click",  closeModalSecond);

function a(){
  button_mini.forEach(btn => {
    btn.addEventListener("click", () => {
      openSecondModal();
      btn.setAttribute("ss", '111');
      catalogItem.forEach(item => {
        item.addEventListener("click", () => {
          if (btn.hasAttribute('ss')) {
            let obj = item.children[0];
            let kkk = obj.children[0];
            let iii = kkk.getElementsByClassName('catalog-item__subtitle');
            let showName = iii[0];
            showName.getElementsByClassName('catalog-item__subtitle')
            btn.removeAttribute('ss');
            modal__descr_name.innerHTML = `${showName.innerHTML}`;
          }
        });
      });
    });
  });
  
}

a();

// let arr = [5, 3, 8, 1, 2, 7];
// function filterArr (array,a, b){
//   return array.filter((x) => x >= a && x <= b);
// }


// console.log(filterArr(arr, 1, 6));
// console.log(arr);