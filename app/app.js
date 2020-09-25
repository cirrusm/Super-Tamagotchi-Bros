let character = $('#character')
let feed = $('#feed')
let sleep = $('#sleep')
let play = $('#play')
let walk = $('#walk')
let hungervalue = $('#hunger').val()
let energyvalue = $('#tiredness').val()
let boredvalue = $('#boredom').val()
let start = $('#start')
let months = 0
let years = 0

$('#device').hide()

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
    $('#ball').css('animation', '')
    $('#baby-mario').css('animation', 'eat 5s ease')
    
        }
    }
sleep = function () {
    if(energyvalue < 10) {
        this.energy += 3
        energyvalue += 3
        $('#tiredness').val(energyvalue)
        $('#baby-mario').css('animation', 'lay 10s')
        $('#ball').css('animation', '')
        
    }
}
play = function() {
    $('#baby-mario').css('animation', 'playball 8s ease')
    $('#ball').css('animation', 'bounce 6s ease')
    if (boredvalue < 10) {
        this.bored += 2
        boredvalue += 2
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

walk.on('click', function() {
    $('#baby-mario').css('animation', 'move 10s infinite')
    $('#ball').css('animation', '')
})






//**************************** TIMER FUNCTIONS ******************************** */
let timer 
function timerEffects() {
    evolve()
    if(hungervalue <= 0 || energyvalue <= 0 || boredvalue <= 0) {
        $('#screen').prepend(`<h1> YOU LET ${$('#name-input').val().toUpperCase()} DIE <br><br>GAME OVER</h1>`)
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
    if(months < 11) {
    months += 1
    $('#age').text(`Age: ${years} years ${months} months`)
    }else{
        months = 0
        years += 1
        $('#age').text(`Age: ${years} years ${months} months`)

    } 
}
}

function evolve() {
    if(years === 1 && months == 0)
    $('#baby-mario').attr('src', '/images/output-onlinepngtools (1).png')
    else if ( years === 2 && months == 0) {
    $('#baby-mario').attr('src', '/images/output-onlinepngtools (2).png')
    
}
}


function startTimer() {
 timer = setInterval(timerEffects, 100)
 $('#start-div').hide()
 $('#age').text(`Age: Newborn`)
 $('#name').text(`Name: ${$('#name-input').val()}`)
 $('#device').show()
 $('header').hide()
}










