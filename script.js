const words = ["html","css","js",'culiao','conchetumare','abecedario']

let word = words[Math.floor(Math.random() * words.length)]

const guessbtn = document.getElementById('guess')
const wordfill = document.getElementById('word')
const error = document.getElementById('error')
const letter = document.getElementById('letter')

let chars = word.split('')
let wordguess = ""
for(let i=0;i<chars.length;i++){
    wordguess+="_"
}


wordfill.innerHTML = wordguess
const error_sequence = ['base','pole','rod','rope','head','torso','larm','rarm','lleg','rleg']
let errors = 0

guessbtn.onclick=()=>{
    let u_guess = letter.value
    if(u_guess == ""){
        error.innerHTML = "No ingresar letras vacias"
        error.setAttribute("class","")
    }else{
        if(word.includes(u_guess)){
            error.setAttribute("class","hidden")
            wordguess = wordfill.innerHTML.split('')
            let x = word.indexOf(u_guess)
            let txt = "" 
            for(let i = 0;i<wordguess.length;i++){
                if(u_guess === wordguess[i]){
                    x = word.indexOf(u_guess,x+1)
                }
                else if(i == x){ 
                    wordguess[i]=u_guess
                }
                txt+= wordguess[i]
            }
            wordfill.innerHTML = txt
            if(wordfill.innerHTML == word){
                console.log("ganaste")
            }
        }else{
            //error
            //show 
            errors+=1
            if(errors < error_sequence.length){
                let part =document.getElementById(error_sequence[errors-1])
                part.setAttribute("class",part.getAttribute("class").replace("hidden",""))
            }else{
                let part =document.getElementById(error_sequence[error_sequence.length-1])
                part.setAttribute("class",part.getAttribute("class").replace("hidden",""))
                alert("You lose")
                //loss 
                //give chance to start again
            }
            

            error.innerHTML = "La letra asignada no es parte de la palabra"
            error.setAttribute("class","")
        }
    }
    letter.value = ""
}
//includes
/*
interesting stuff
botonadivinar.addEventlistener('click',()=>{

})
let letter = getelementbyid lette.value 

let letrasadivinadas = new Array(secretword.length).fill('_')
*/
