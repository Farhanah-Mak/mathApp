
function updateLocalStorage(){
    localStorage.setItem('score', JSON.stringify(score))
}

const random1 = Math.floor(Math.random() * 10)
const random2 = Math.floor(Math.random() * 10)

const question= document.getElementById('question')
question.innerText =`What is ${random1} multiplied by ${random2}`

let score= JSON.parse(localStorage.getItem('score'))
if(score <= 0){
    score = 0
}
const scored=document.getElementById('score')
scored.innerText = `score: ${score}`

const input=document.getElementById('answer')
const form= document.getElementById('form')
const correctAnswer= random1 * random2
form.addEventListener('submit', () => {
    let userAnswer= +input.value
    if(userAnswer === correctAnswer){
        score++
        updateLocalStorage()
    }
    else{
        score--
        updateLocalStorage()
    }

})
