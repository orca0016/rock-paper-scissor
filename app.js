let key1 = document.getElementById("a")
let key2 = document.getElementById("b")
let key3 = document.getElementById("c")
let key4 = document.getElementById("d")
let key5 = document.getElementById("e")
let statso = document.getElementById("stats")
let score = document.getElementById("p")
let rscore = score.textContent = 5
let random = Math.floor(Math.random() * 5);
console.log(random)

function aa(){
if(random == key1.value){
    stats()
} else{
    decrease()}
}



function ss(){
if(random == key2.value){
    stats()
}else{decrease()}
}


function bb(){
if(random == key3.value){
    stats()
}else{decrease()}
}


function cc(){
if(random == key4.value){
    stats()
}else{
    decrease()}
}

function dd(){
if(random == key5.value){
    stats()
}else{decrease()}
}


function stats(){
statso.textContent ="(  برنده شدی / نان مادر و شیر پدر حلالت)"
alert(` ماشالله پسر گلم تو برنده شدی  دمت گرم داشمی `)

}

function decrease(){
score.textContent = rscore-- - 1
}
