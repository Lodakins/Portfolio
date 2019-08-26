//window.scroll(console.log(window.pageXOffset));

let header= document.querySelector('.navbar-dark');
let height=300;
window.onscroll=function(){

    console.log(window.pageYOffset);
    if(window.pageYOffset>height){
        header.classList.add('animatedDown');
    }else{
        header.classList.remove('animatedDown');
    }
};
