const tab = document.querySelectorAll('.tab');
const tab_container = document.querySelector('.tab-section');


console.log("hfdf")

function handleTab(e) {
    removeHighlight();
    this.classList.add('active');
    switch(this.id){
        case 'tab-1' :
          tab_container.style.background = `url("tab-cover-2 .jpg") no-repeat`;
          tab_container.style.backgroundSize = `cover`;
        break;
        case 'tab-2' : 
          tab_container.style.background = `url("tab-cover-3.jpg") no-repeat`;
          tab_container.style.backgroundSize = `cover`;
        break;
        case 'tab-3' : 
          tab_container.style.background = `url("tab-cover-1.jpg") no-repeat`;
          tab_container.style.backgroundSize = `cover`;
    }
}
function removeHighlight() {
    tab.forEach(item => item.classList.remove('active'));
}


  function handleDot(e) {
     hideAllSlide();
    
         let numSlide = e.target.classList[1][4];
         tab[`${numSlide - 1}`].style.display ='initial';


     switch(`tab-${numSlide}`){
      case 'tab-1' :
        tab_container.style.background = `url("tab-cover-1.jpg")`;
      break;
      case 'tab-2' : 
        tab_container.style.background = `url("tab-cover-2.jpg")`;
      break;
      case 'tab-3' : 
        tab_container.style.background = `url("tab-cover-3.jpg")`;
  }

    this.style.backgroundColor = 'white';
  }

  function hideAllSlide() {
     tab.forEach(item => item.style.display = 'none');
     dot.forEach(item => item.style.backgroundColor = 'transparent');
  }

  tab.forEach(item => item.addEventListener('mouseover',handleTab));
