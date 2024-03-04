"use strict";
let btn = document.querySelector('button');
let inp = document.querySelector('input');
let boxs = document.querySelectorAll('.box');
let drag = null;
let num = true;
// Add to box one if item number < 7
btn.onclick = () => {
    if (inp.value != '') {
        if (num === true) {
            boxs[0].innerHTML += `
            <p class="item bg-primary rounded text-white text-capitalize fw-bold m-2 p-1" draggable="true" >${inp.value}</p>
            `;
        }
        else {
            confirm('you can just charge 7 item maximan');
        }
    }
    inp.value = '';
    getDrag();
};
function getDrag() {
    let items = document.querySelectorAll('.item');
    if (items.length < 7) {
        num = true;
    }
    else {
        num = false;
    }
    items.forEach(item => {
        item.ondragstart = () => {
            drag = item;
            item.style.opacity = '0.5';
        };
        item.ondragend = () => {
            drag = null;
            item.style.opacity = '1';
        };
    });
    boxs.forEach(box => {
        box.ondragover = (e) => {
            e.preventDefault();
            box.style.color = '#fff';
            box.style.background = 'green';
        };
        box.ondragleave = () => {
            box.style.color = '#000';
            box.style.background = '#fff';
        };
        box.ondrop = () => {
            box.append(drag);
            box.style.color = '#000';
            box.style.background = '#fff';
        };
    });
}
