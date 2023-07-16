const images = document.querySelectorAll(".slide");

let counter = 0;

const slideImage = () => {
    if(counter>=images.length){
        counter=0
    }
    if(counter<0){
        counter=images.length-1
    }
    images.forEach((image, index) => {
        image.style.left = `${index * 100}%`;
        image.style.transform = `translateX(${-counter * 100}%)`;
    });
};

const previous = () => {
  counter--;
  slideImage();
};
const next = () => {
  counter++;
  slideImage();
};
