const container=document.querySelector(".mainContainerCarouselFinal");
const slide=document.querySelector(".slideTemplate");
const prevBtn=document.querySelector(".controlerFinalCarousel div:nth-child(1)");
const nextBtn=document.querySelector(".controlerFinalCarousel div:nth-child(2)");
let nbclick=0;
const nbSlide=10;

const {
  style: containerStyle, getComputedStyle: getCS
}

=window;

nextBtn.addEventListener("click", ()=> {
    if (nbclick < nbSlide - 1) {
      nbclick++; updateScroll();
    }
  });

prevBtn.addEventListener("click", ()=> {
    if (nbclick > 0) {
      nbclick--; updateScroll();
    }
  });

function updateScroll() {
  const screenWidth=parseInt(getCS(container).getPropertyValue("--screenWidth").replace("px", ""));
  const slideHeight=parseInt(getCS(slide).getPropertyValue("--slideHeight").replace("px", ""));
  const scrollAmount=((screenWidth - (slideHeight + 40)) / 2) * nbclick;

  container.scroll({
    left: scrollAmount, behavior: "smooth"
  });
}