// event for mobile menu

let humb = document.querySelector('#svg1');
let popUp = document.querySelector('.menuPopUp');
//
  humb.addEventListener('click', ()=>{
  document.querySelector('.menuPopUp').className += ' active';
  });
  popUp.addEventListener('click', ()=>{
    popUp.classList.remove("active");
  });

//displays position of screen for links

  window.onscroll = function() {
  	posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (posTop >= 490 & posTop <= 1158){
      document.getElementById('linkSkills').className += ' activeLink';
    } else document.getElementById('linkSkills').classList.remove('activeLink');

    if (posTop >= 1159 & posTop <= 2500){
      document.getElementById('linkPortfolio').className += ' activeLink';
    } else document.getElementById('linkPortfolio').classList.remove('activeLink');

    if (posTop >= 2501){
      document.getElementById('linkContact').className += ' activeLink';
    } else document.getElementById('linkContact').classList.remove('activeLink');
    console.log(posTop);
  };
