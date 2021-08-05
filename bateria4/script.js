document.body.addEventListener('keyup',(event)=>{
    playSound(event.code.toLowerCase() );
});
document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray)
    }
})
function playSound(sound) {
    let audioEllement = document.querySelector(`#s_${sound}`);
    let keyEllement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioEllement) {
        audioEllement.currenTime = 0;
        audioEllement.play();
    }
    if(keyEllement) {
        keyEllement.classList.add('active');

        setTimeout(()=>{
            keyEllement.classList.remove('active')
        }, 300);
    }
}
function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){
        setTimeout(()=>{

        playSound(`key${songItem}`);

        }, wait);

        wait +=250;
    }
}