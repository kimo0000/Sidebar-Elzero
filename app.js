let sliders = document.querySelector(".slider img");
let liste = document.querySelectorAll(".slider ul li");
console.log(sliders);
console.log(liste);

let arraysImg = ["nuit.jpg", "nature.jpg", "route.jpg"];

let counter = setInterval(() => {
    let randomImg = Math.floor(Math.random() * arraysImg.length);
    sliders.src = `./imgs/${arraysImg[randomImg]}`;
}, 2000);

liste.forEach((li) => {
    li.addEventListener("click", (e) => {
        clearInterval(counter);
        liste.forEach((el) => {
           el.classList.remove('active');
        });
    
    e.currentTarget.classList.add('active');
  })
});

if(localStorage.getItem('img')) {
    clearInterval(counter);
    sliders.src = `./imgs/${localStorage.getItem('img')}`;
     liste.forEach((el) => {
           el.classList.remove('active');
        });
    document.querySelector(`[data-img="${localStorage.getItem('img')}"]`).classList.add('active');
}

liste.forEach((li) => {
      li.addEventListener('click', (e) => {
        if(e.currentTarget.dataset.img === arraysImg[0]) {
           sliders.src = "./imgs/nuit.jpg";
           localStorage.setItem('img', "nuit.jpg");
        } else if(e.currentTarget.dataset.img === arraysImg[1]) {
           sliders.src = "./imgs/nature.jpg";
           localStorage.setItem('img', "nature.jpg");
        } else {
           sliders.src = "./imgs/route.jpg";
           localStorage.setItem('img', "route.jpg")
      }
    })
  })

