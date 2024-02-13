function revealToSpan(){
document.querySelectorAll(".reveal")
   .forEach(function(elem) {
      //create two span
      let parent=document.createElement("span");
      let child=document.createElement("span");
      //parent and child both set their respective class
      parent.classList.add("parent");
      child.classList.add("child");
      //span parent gets child and child gets elem details
      child.innerHTML= elem.textContent;
      parent.appendChild(child);// isme reveal m jo bhi likha wo aa jayega 
      //elem replace its value with parent span
      elem.innerHTML="";
      elem.appendChild(parent);
   });
}

revealToSpan();
var t1=gsap.timeline();
t1
.to(".parent,.child",{
    y:"-100%",
    duration: 2,
     ease: Expo.easeInOut
})
.to("#loader",{
    height:0,
    duration: 1,
    ease: Expo.easeInOut
})
.to("#green",{
   height: "100%",
   top: 0,
   duration: 1,
   delay:-1,
   erase: Circ.eraseInOut
})
.to("#green",{
   height: "0%",
   duration: 1,
   delay:-.2,
   erase: Circ.eraseInOut
})
document.getElementById('op').addEventListener('click', function() {
    // Change 'file2.html' to the path of the HTML file you want to open
    window.location.href = 'i1.html';
});
/*const canvas = document.getElementById('sketchpad');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);*/

/*var t1=gsap.timeline();
t1
.to("#fs",{
   height:0,
   duration: 2,
   erase: Expo.eraseInOut
})
.to("#elem",{
   height: "100%",
   duration: 2,
   delay:-2,
   erase: Expo.eraseInOut
})
.to("#white",{
   height: "100%",
   duration: 2,
   delay:-1.6,
   erase: Expo.eraseInOut
})
*/

