//Dados iníciais initial Data
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: '',
};
let player = '';
let warning = '';
let playing = false;

reset();

//Eventos events
document.querySelector('.reset').addEventListener('click',reset);
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick);
});


//Funções function
function itemClick(event) {
    let item = event.target.getAttribute('data-item');
    if(playing && square[item] === '') {
        square[item] = player;
        renderSquare();
        //auternar jogador
        togglePlayer();
    }
}
function reset() {
    warning = '';

    //escolhendo um jogador
    let random = Math.floor(Math.random()*2);
    player = (random === 0) ? 'o' : 'x';

    //zera o tabuleiro
    for(let i in square) {
        square[i] = '';
    }
    playing = true;

    //transformando os dados, para visualizar
    renderSquare();
    renderInfo();
}

//ver se tem algo preenchido mostrando na tela
function renderSquare() {
    for(let i in square){
       //pegar um item especifico
       let item = document.querySelector(`div[data-item=${i}]`);
         item.innerHTML = square[i];
    }
    //verificar o jogo
    checkGame();
};
function renderInfo() {
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}
function togglePlayer() {
    player = (player === 'o') ? 'x' : 'o';
    renderInfo();
}
function checkGame() {
    if(checkWinnerFor('o')) {
        warning = 'O "o" venceu';
        playing = false;
    }else if(checkWinnerFor('x')) {
        warning = 'O "x" venceu';
        playing = false;
    }else if(isFull()) {
        warning = 'Deu empate';
        playing = false;
    }
}
//ver o vencedor
function checkWinnerFor(player){
    let pos = [
        //horizontal
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        //vertical
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        //transversal
        'a1,b2,c3',
        'c1,b2,a3'
    ];
    //lupim p/ ver se está preenchido
    for(let w in pos) {
        let pArray = pos[w].split(',');//a1, a2, a3
       let hasWon = pArray.every(option =>square[option] === player);
       if(hasWon){
           return true;
       }
    }
    return false;
}
//ver se deu empate
function isFull() {
    for(let i in square) {
       if(square[i] === '') {
        return false;
     }
    }
    return true;
}