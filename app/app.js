//buttons
let feed = $('#feed')
let sleep = $('#sleep')
let play = $('#play')
let walk = $('#walk')
//progression bars
let hungervalue = $('#hunger').val()
let energyvalue = $('#tiredness').val()
let boredvalue = $('#boredom').val()
let start = $('#start')
let months = 0
let years = 0
let char = 0

//hidden at start of the game
$('#device').hide()
$('#select').hide()
$('#lose').hide()

//Tomogachi functions
class Tomogachi {
    constructor(hungervalue, energyvalue, boredvalue,){
    this.hunger = hungervalue
    this.energy = energyvalue
    this.bored = boredvalue 
    this.age = 0
}
feed = function () {
    $('#ball').css('animation', '')
    $('#baby-mario').css('animation', 'eat 8s ease')
    $('#mushroom').css('animation', 'mush 2.5s ease 2.8s')
    $('#screen').css('background-image', 'url("/images/resizedbackkk.png")')

    if(hungervalue < 10) {
    this.hunger += 3
    hungervalue += 3
    $('#hunger').val(hungervalue) 
    
    
        }
    }
sleep = function () {
    $('#baby-mario').css('animation', 'lay 8s ease')
        $('#ball').css('animation', '')
        $('#mushroom').css('animation', '')
        $('#screen').css('background-image', 'url("/images/back488x388.png")')
    if(energyvalue < 10) {
        this.energy += 3
        energyvalue += 3
        $('#tiredness').val(energyvalue)
        
        
        
    }
}
play = function() {
    $('#baby-mario').css('animation', 'playball 7.5s ease')
    $('#ball').css('animation', 'bounce 6s ease')
    $('#mushroom').css('animation', '')
    $('#screen').css('background-image', 'url("/images/resizedbackkk.png")')
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
walk.on('click', function() {
    $('#baby-mario').css('animation', 'move 10s infinite')
    $('#ball').css('animation', '')
    $('#mushroom').css('animation', '')
    $('#screen').css('background-image', 'url("/images/resizedbackkk.png")')
})


//*****************************CHARACTER SELECTION LISTENERS *********************/

$('#marioselect').on('click', mariopress)
$('#luigiselect').on('click', luigipress)
$('#bowserselect').on('click', bowserpress)
$('#peachselect').on('click', peachpress)
$('#dkselect').on('click', dkpress)




//******************CHARACTER SELECTION FUNCTIONS*************************

function presscontinue() {
$('header').hide()
$('#select').show()
$('#baby-mario').css('animation', 'move 10s infinite')
}

function mariopress() {
    $('#baby-mario').attr('src', 'images/baby mario.png')
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

function peachpress() {
    $('#baby-mario').attr('src', '/images/babypeach.png')
    $('#device').show()
    $('#select').hide()
    startTimer()
    char = 4
    return char

}

function dkpress() {
    $('#baby-mario').attr('src', '/images/output-onlinepngtools (22).png')
    $('#device').show()
    $('#select').hide()
    startTimer()
    char = 5
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
        $('#loseh1').text(`YOU LET ${$('#name-input').val().toUpperCase()} DIE \n GAME OVER`)
        
        
        
        
    }else{
    evolve()
    hungervalue -= .12
    energyvalue -= .08
    boredvalue -= .05
    $('.gameplay').show()
    $('#hunger').val(hungervalue)
    $('#tiredness').val(energyvalue)
    $('#boredom').val(boredvalue)
    //Age conditionals
    if(months < 11) {
    months += .4
    $('#age').text(`Age: ${years} years ${Math.floor(months)} months`)
    }else{
        months = 0
        years += 1
        $('#age').text(`Age: ${years} years ${months} months`)

    } 
}
}

function startTimer() {
    timer = setInterval(timerEffects, 800)
    $('#age').text(`Age: Newborn`)
    $('#name').text(`Name: ${$('#name-input').val()}`)
    $('#device').show()
    $('header').hide()
    

}
// *******************************EVOLVE FUNCTIONS***********************
function evolve() {
    if(years === 5 && char == 1)
    $('#baby-mario').attr('src', '/images/output-onlinepngtools (1).png')
    else if ( years === 10 && char == 1) {
    $('#baby-mario').attr('src', '/images/output-onlinepngtools (12).png')  
} else if ( years == 5 && char == 2) {
    $('#baby-mario').attr('src', '/images/output-onlinepngtools (10).png')
} else if (years == 10 && char == 2){
$('#baby-mario').attr('src', '/images/output-onlinepngtools (11).png')
}else if (years == 5 && char == 3){
    $('#baby-mario').attr('src','/images/output-onlinepngtools (13).png')
}else if (years == 10 && char == 3){
$('#baby-mario').attr('src', '/images/output-onlinepngtools (14).png')
} else if ( years == 5 && char == 4) {
    $('#baby-mario').attr('src', '/images/output-onlinepngtools (19).png')
} else if (years == 10 && char == 4){
$('#baby-mario').attr('src', '/images/output-onlinepngtools (20).png')
}else if (years == 5 && char == 5){
    $('#baby-mario').attr('src','/images/output-onlinepngtools (21).png')
}else if (years == 10 && char == 5){
$('#baby-mario').attr('src', '/images/output-onlinepngtools (24).png')
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
   
    $('#device').css('background-color', 'rgb(205, 245, 189)')
    $('#mushroom').css('animation', '')
    $('#screen').css('background-image', 'url("/images/resizedbackkk.png")')
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

//randomize device color

$('#randomize').on('click', function () {
    $('#device').css(`background-color`, `rgb(${Math.floor(Math.random() * 257)}, ${Math.floor(Math.random() * 257)}, ${Math.floor(Math.random() * 257)})`)
    
})










