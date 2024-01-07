let body =document.body;


let sideBar = document.querySelector('.side-bar');
document.querySelector('#menu-btn').onclick =()=>{
    // console.log('hello world')
    sideBar.classList.toggle('active');
    body.classList.toggle('active');

}

document.querySelector('.side-bar .close-side-bar').onclick =()=>{
    // console.log('hello world')
    sideBar.classList.remove('active');
    body.classList.remove('active');

}

let togglebtn = document.querySelector('#toggle-btn');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
    togglebtn.classList.replace('fa-sun','fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode','enabled');

}
const disableDarkMode =()=>{
    togglebtn.classList.replace('fa-moon','fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode','disabled'); //noice :)
}
if(darkMode === 'enabled'){
    enableDarkMode();
}
togglebtn.onclick =(e)=>{
let darkMode = localStorage.getItem('dark-mode');
if(darkMode === 'disabled'){
    enableDarkMode();
}
else{
    disableDarkMode();
}
}

$(document).ready(function() {
    // smooth scrolling
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });
});