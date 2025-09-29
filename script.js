let items = document.querySelectorAll('.item');
let title = document.getElementById('title');
let author = document.getElementById('author');
title.innerText="Design by ";
title.style.textDecoration = 'underline';
author.innerText="Shaheryar khan"
let item_qty = items.length;
let raduis = 550;

items.forEach((item , i)=>{
    const angle = (360 / item_qty) * i;
    item.style.transform = `
    rotateY(${angle}deg)
    translateZ(${raduis}px)
    `;
});
