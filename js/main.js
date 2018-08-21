// function spinWords(el){
//   // let word=[];
//   // let first = el.split(' ').slice(0,1);
//   for(let i = 1; i <= el.length; i++){
//   	console.log(el.split(' ')[i].split('').reverse().join(''))
//  }
// }
//
// spinWords("Hey fellow warriors");
//
// let cross = document.querySelector('#svg2');
let humb = document.querySelector('#svg1');
let popUp = document.querySelector('.menuPopUp');
//
  humb.addEventListener('click', ()=>{
  document.querySelector('.menuPopUp').className += ' active';
  });
  popUp.addEventListener('click', ()=>{
    popUp.classList.remove("active");
    // cross.classList.remove("active");
    // alert('olo');
  });
//
// cross.addEventListener('click', ()=> {
//   document.querySelector('.menuPopUp').className = 'navigation';
//   document.querySelector('.menuPopUp__links ').className = 'navigation__links';
//   humb.style.display = 'block';
//   cross.style.display = 'none';
// });
