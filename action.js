let img = document.querySelector('.img');

function phones(phone){

   img.src = phone;
}

let container = document.querySelector('main');
let body = document.querySelector('body');
let header = document.querySelector('header');
function colors(color)
{
    header.style.background=color;
    body.style.background=color;
    container.style.background=color;
}