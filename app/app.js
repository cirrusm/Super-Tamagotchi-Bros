let character = $('#character')
let feed = $('#feed')
let sleep = $('#sleep')
let play = $('#play')
let hungervalue = $('#hunger').val()
let energyvalue = $('#tiredness').val()
let boredvalue = $('#boredom').val()
let start = $('#start')
let months = 0
let years = 0
//$('.gameplay').hide()

class Tomogachi {
    constructor(hungervalue, energyvalue, boredvalue,){
    this.hunger = hungervalue
    this.energy = energyvalue
    this.bored = boredvalue 
    this.age = 0
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
let timer 
function timerEffects() {
    evolve()
    if(hungervalue <= 0 || energyvalue <= 0 || boredvalue <= 0) {
        $('#screen').prepend('<h1> YOU LET MARIO DIE <br><br>GAME OVER</h1>')
        $('.gameplay').hide()
        start.show()
        clearInterval(timer)
        hungervalue = 5
        boredvalue = 5
        energyvalue = 5
        
        
    }else{
        
    hungervalue -= .3
    energyvalue -= .2
    boredvalue -= .1
    $('.gameplay').show()
    $('#hunger').val(hungervalue)
    $('#tiredness').val(energyvalue)
    $('#boredom').val(boredvalue)
    if(months < 12) {
    months += 1
    $('#age').text(`Age: ${years} years ${months} months`)
    }else if(months == 12) {
        months = 0
        years += 1
        $('#age').text(`Age: ${years} years ${months} months`)

    } 
}
}

function evolve() {
    if(years === 1 && months == 0)
    $('#baby-mario').attr('src', '/output-onlinepngtools (1).png')
    else if ( years === 2 && months == 0) {
    $('#baby-mario').attr('src', '/images/grown mario.png')
    
}
}


function startTimer() {
 timer = setInterval(timerEffects, 300)
 $('#start-div').hide()
 $('#age').text(`Age`)
 $('#name').text(`Name: ${$('#name-input').val()}`)
}









