let character = $('#character')
let feed = $('#feed')
let sleep = $('#sleep')
let play = $('#play')
let hungervalue = $('#hunger').val()
let energyvalue = $('#tiredness').val()
let boredvalue = $('#boredom').val()
let start = $('#start')

class Tomogachi {
    constructor(hungervalue, energyvalue, boredvalue){
    this.hunger = hungervalue
    this.energy = energyvalue
    this.bored = boredvalue 
}
feed = function () {
    if(hungervalue < 10) {
    this.hunger += 1
    hungervalue += 1
    $('#hunger').val(hungervalue) 
    
        }
    }
sleep = function () {
    if(energyvalue < 10) {
        this.energy += 1
        energyvalue += 1
        $('#tiredness').val(energyvalue)
    }
}
play = function() {
    if (boredvalue < 10) {
        this.bored += 1
        boredvalue += 1
        $('#boredom').val(boredvalue)
    }
}
   
}

let mario = new Tomogachi

//**************************** BUTTON EVENT LISTENERS *****************************/
feed.on('click', mario.feed)
sleep.on('click', mario.sleep)
play.on('click', mario.play)
start.on('click', startTimer)




//**************************** TIMER FUNCTIONS ******************************** */

function timerEffects() {
    if(hungervalue <= 0 || energyvalue <= 0 || boredvalue <= 0) {
        $('#screen').html('<h1> YOU LET MARIO DIE <br><br>GAME OVER</h1>')
        
    }else{
    hungervalue -= .3
    energyvalue -= .2
    boredvalue -= .1
    $('#hunger').val(hungervalue)
    $('#tiredness').val(energyvalue)
    $('#boredom').val(boredvalue)
}
}

function startTimer() {
 setInterval(timerEffects, 1000)
}









