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
let char = 0

$('#device').hide()
$('#select').hide()
$('#lose').hide()

class Tomogachi {
    constructor(hungervalue, energyvalue, boredvalue,){
    this.hunger = hungervalue
    this.energy = energyvalue
    this.bored = boredvalue 
    this.age = 0
}
feed = function () {
    if(hungervalue < 10) {
    this.hunger += 4
    hungervalue += 4
    $('#hunger').val(hungervalue) 
    $('#ball').css('animation', '')
    $('#baby-mario').css('animation', 'eat 5s ease')
    
        }
    }
sleep = function () {
    if(energyvalue < 10) {
        this.energy += 5
        energyvalue += 5
        $('#tiredness').val(energyvalue)
        $('#baby-mario').css('animation', 'lay 8s')
        $('#ball').css('animation', '')
        
    }
}
play = function() {
    $('#baby-mario').css('animation', 'playball 8s ease')
    $('#ball').css('animation', 'bounce 6s ease')
    if (boredvalue < 10) {
        this.bored += 3
        boredvalue += 3
        $('#boredom').val(boredvalue)
    }
}
   
}

let mario = new Tomogachi


//**************************** BUTTON EVENT LISTENERS *****************************/
feed.on('click', mario.feed)
sleep.on('click', mario.sleep)
play.on('click', mario.play)
start.on('click', presscontinue)

$('#marioselect').on('click', mariopress)
$('#luigiselect').on('click', luigipress)
$('#bowserselect').on('click', bowserpress)


walk.on('click', function() {
    $('#baby-mario').css('animation', 'move 10s infinite')
    $('#ball').css('animation', '')
})


//******************PRESSING BUTTON FUNCTIONS*************************

function presscontinue() {
$('header').hide()
$('#select').show()
$('#baby-mario').css('animation', 'move 10s infinite')
}

function mariopress() {
    $('#baby-mario').attr('src', '/images/baby mario.png')
    $('#device').show()
    $('#select').hide()
    startTimer()
    char = 1
    return char
    
}

function luigipress(){
    $('#baby-mario').attr('src', '/images/output-onlinepngtools (7).png')
    $('#device').show()
    $('#select').hide()
    startTimer()
    char = 2
    return char

}

function bowserpress() {
    $('#baby-mario').attr('src', '/images/output-onlinepngtools (9).png')
    $('#device').show()
    $('#select').hide()
    startTimer()
    char = 3
    return char
}



//**************************** TIMER FUNCTIONS ******************************** */
let timer 
function timerEffects() {
    evolve()
    if(hungervalue <= 0 || energyvalue <= 0 || boredvalue <= 0) {
     $('#lose').show()
        $('.gameplay').hide()
        start.show()
        clearInterval(timer)
        
        
        
    }else{
    evolve()
    hungervalue -= .03
    energyvalue -= .02
    boredvalue -= .01
    $('.gameplay').show()
    $('#hunger').val(hungervalue)
    $('#tiredness').val(energyvalue)
    $('#boredom').val(boredvalue)
    if(months < 11) {
    months += .05
    $('#age').text(`Age: ${years} years ${Math.floor(months)} months`)
    }else{
        months = 0
        years += 1
        $('#age').text(`Age: ${years} years ${months} months`)

    } 
}
}

function startTimer() {
    timer = setInterval(timerEffects, 100)
    $('#age').text(`Age: Newborn`)
    $('#name').text(`Name: ${$('#name-input').val()}`)
    $('#device').show()
    $('header').hide()
   }


// *******************************EVOLVE FUNCTIONS***********************
function evolve() {
    if(years === 1 && char == 1)
    $('#baby-mario').attr('src', '/images/output-onlinepngtools (1).png')
    else if ( years === 2 && char == 1) {
    $('#baby-mario').attr('src', '/images/output-onlinepngtools (12).png')  
} else if ( years == 1 && char == 2) {
    $('#baby-mario').attr('src', '/images/output-onlinepngtools (10).png')
} else if (years == 2 && char == 2){
$('#baby-mario').attr('src', '/images/output-onlinepngtools (11).png')
}else if (years == 1 && char == 3){
    $('#baby-mario').attr('src','/images/output-onlinepngtools (13).png')
}else if (years == 2 && char == 3){
$('#baby-mario').attr('src', '/images/output-onlinepngtools (14).png')

}
}


//***************************RESET BUTTON********************** */

$('#reset').on('click', function() {

    clearInterval(timer)
    hungervalue = 7;
    energyvalue = 7;
    boredvalue = 7;
    years = 0;
    months = 0;
   
    $('#ball').css('animation', '')
    $('#hunger').val(hungervalue)
    $('#tiredness').val(energyvalue)
    $('#boredom').val(boredvalue)
    $('#age').text(`Age: ${years} years ${Math.floor(months)} months`)

    $('.gameplay').show()
    $('#lose').hide()
    $('#device').hide()
    $('header').show()
    

})










