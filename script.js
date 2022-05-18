const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if(bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

var imgModel = document.getElementById("img-model");
var pageImg = document.getElementsByClassName("img");

document.getElementById("zoom1").addEventListener('click', ()=>{
    document.querySelector('.bg-model').style.display='flex';
    imgModel.src = pageImg[0].src
})

document.getElementById("zoom2").addEventListener('click', ()=>{
    document.querySelector('.bg-model').style.display='flex';
    imgModel.src = pageImg[1].src
})

document.getElementById("zoom3").addEventListener('click', ()=>{
    document.querySelector('.bg-model').style.display='flex';
    imgModel.src = pageImg[2].src
})

document.getElementById("zoom4").addEventListener('click', ()=>{
    document.querySelector('.bg-model').style.display='flex';
    imgModel.src = pageImg[3].src
})

document.getElementById("zoom5").addEventListener('click', ()=>{
    document.querySelector('.bg-model').style.display='flex';
    imgModel.src = pageImg[4].src
})

document.getElementById("zoom6").addEventListener('click', ()=>{
    document.querySelector('.bg-model').style.display='flex';
    imgModel.src = pageImg[5].src
})

document.getElementById("zoom7").addEventListener('click', ()=>{
    document.querySelector('.bg-model').style.display='flex';
    imgModel.src = pageImg[6].src
})

document.getElementById("zoom8").addEventListener('click', ()=>{
    document.querySelector('.bg-model').style.display='flex';
    imgModel.src = pageImg[7].src
})

document.getElementById("zoom9").addEventListener('click', ()=>{
    document.querySelector('.bg-model').style.display='flex';
    imgModel.src = pageImg[8].src
})

document.getElementById("zoom10").addEventListener('click', ()=>{
    document.querySelector('.bg-model').style.display='flex';
    imgModel.src = pageImg[9].src
})

document.getElementById("zoom11").addEventListener('click', ()=>{
    document.querySelector('.bg-model').style.display='flex';
    imgModel.src = pageImg[10].src
})

document.getElementById("zoom12").addEventListener('click', ()=>{
    document.querySelector('.bg-model').style.display='flex';
    imgModel.src = pageImg[11].src
})

document.getElementsByClassName("close")[0].addEventListener('click', ()=>{
    document.querySelector('.bg-model').style.display='none';
})