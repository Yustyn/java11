// Task 1

let auto = (manufacture, model, year, avSpeed)=>{
    return {
        "manufacture" : manufacture,
        "model" : model,
        "year" : year,
        "avSpeed" : avSpeed
    }
}

function info(automobile){
    return console.log(automobile)
}

function timeTravel(car, distance) {
    let result = distance / car.avSpeed,
        relax = 0

    result = Math.trunc(result) + (((result - (Math.trunc(result))) * 60) / 100)

    for (let hour = 1; hour <= result; hour++) {
        if (hour % 4 == 0) {
            relax++
            result++
        }
    }
    
    result = result.toFixed(2).split(".")
    
    if (relax == 0) {
        return console.log(`Вам потрібно - ${result[0]}год ${result[1]}хв. Вам не знадобиться відпочинок.`)
    } else {
        return console.log(`Вам потрібно - ${result[0]}год ${result[1]}хв. ${relax}год Ви витратили на відпочинок.`)
    }
}
 
let electro = auto("Tesla", "Model-X", 2017, 90)

info(electro)

timeTravel(electro, 800)

// Task 2

let drob = function(top,bot){
    return {
        "top" : top,
        "bot" : bot
    }
}

function addition(drob1, drob2){
    let drob1Top = drob1.top * drob2.bot,
        drob1Bot = drob1.bot * drob2.bot,
        drob2Top = drob2.top * drob1.bot

    return (console.log("Addition:",drob1.top + '/' + drob1.bot, '+', drob2.top + '/' + drob2.bot , '=', drob1Top + '/' + drob1Bot, '+', drob2Top + '/' + drob1Bot, '=', drob1Top + drob2Top + '/' + drob1Bot))
}

function subtraction(drob1, drob2){
    let drob1Top = drob1.top * drob2.bot,
        drob1Bot = drob1.bot * drob2.bot,
        drob2Top = drob2.top * drob1.bot

    return (console.log("Subtraction:", drob1.top + '/' + drob1.bot, '-', drob2.top + '/'+drob2.bot , '=', drob1Top + '/' + drob1Bot, '-', drob2Top + '/' + drob1Bot, '=', drob1Top - drob2Top + '/' + drob1Bot))
}

function multiplication(drob1, drob2){
    let result1 = drob1.top * drob2.top,
        result2 = drob1.bot * drob2.bot

    return (console.log("Multiplication:", drob1.top + '/' + drob1.bot, '*', drob2.top + '/' + drob2.bot , '=', result1 + '/' + result2))
}

function division(drob1, drob2){
    let result1 = drob1.top * drob2.bot,
        result2 = drob1.bot * drob2.top

    return (console.log("Division:", drob1.top + '/' + drob1.bot, ':', drob2.top + '/' + drob2.bot , '=', result1 + '/' + result2))
}

first = drob(5, 3)
second =  drob(3,5)

addition(first, second)
subtraction(first, second)
multiplication(first, second)
division(first, second)

// Task 3

let time = function(hours, minutes, seconds){
    return {
        "hours" : hours,
        "minutes" : minutes,
        "seconds" : seconds
    }
}

function output(time){
    return console.log(time.hours + ":" + time.minutes + ":" + time.seconds)
}

function timeIncrease(time, seconds){
    if ((seconds + time.seconds) > 59){
        let min, sec, hour
        min = time.minutes
        sec = seconds + time.seconds
        hour = time.hours
        while (sec > 59){
            min ++
            sec -=60
        }
        while (min > 59){
            hour ++
            min -=60
        }
        while (hour > 23){
            hour -= 24
        }
        return console.log(hour + ":" + min + ":" + sec)
    } else {
        return document.write(time.hours + ":" + time.minutes + ":" + (time.seconds + seconds))
    }
}

let now = time(23,56,48)

output(now)
timeIncrease(now, 90120)