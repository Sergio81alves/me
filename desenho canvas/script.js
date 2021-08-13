//initial Data
let currentColor = 'black';
let canDraw = false;

//selecionar o canvas
let screen = document.querySelector('#tela')
let ctx = screen.getContext('2d')

//Events
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
/*
Passo a passo para desenhar no canvas 
-Quando o click mouse ABAIXAR, ative o modo desenho.
-quando o mouse se MOVER, se o modo desenho estiver atoivado, desenhe.
-Quando o click do mouse LEVANTAR, desative o modo de desenho
*/ 

//Functions
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;
    console.log('cor clicada: ', color);

    //selecionar quem está marcado e ou remarcar
    //primeiro remove depois add
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}
function mouseDownEvent() {
    canDraw = true;
}
function mouseMoveEvent(e) {
  if(canDraw)  {
      console.log(e.pageX, e.pageY);
      //distancia
      let pointX = e.pageX - screen.offSetLeft;

      
  }
}
function mouseUpEvent() {
    canDraw = false;
}