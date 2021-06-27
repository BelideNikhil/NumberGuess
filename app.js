console.warn("learn Js")

let chances=5
let user_input=document.querySelector("#input")
let no_input=document.querySelector("#no-input")
const loader=document.querySelector("#loader")
const click=document.querySelector("#btn")
var woah=document.querySelector("#close")

let comp=(Math.floor(Math.random()*21))
let chosen =document.querySelector("#computer-number")


loader.style.display="none"

console.log(comp)
if(comp){
    chosen.innerHTML="Computer is picking a number"
    user_input.style.visibility="hidden"
    click.style.visibility="hidden"
    compChooser()
    loader.style.display="block"
}

function compChooser(){
    setTimeout(()=>{
        chosen.innerHTML="Computer has chosen, lets play"
        click.style.visibility="visible"
        user_input.style.visibility="visible"
        loader.style.display="none"
    },2000)
}


click.addEventListener("click",()=>{
    chosen.style.visibility="hidden"
    let x=parseInt(user_input.value)
    if(user_input.value===""){
        no_input.style.display="block"
        no_input.innerHTML="Please enter a number"
    }
    else if(x<0 || x>20){
        no_input.style.display="block"
        no_input.innerHTML="Please enter a number between 0 and 20"
        woah.style.display="none"
    }
    else{
        if(x===comp){
            correct()
        }
        else{
            no_input.style.display="none"
            chances--
            if(x===(comp-1) || x===(comp+1) || x===(comp-2) || x===(comp+2)){
                woah.style.display="block"
                woah.innerHTML="You are very close!"
            }
            else{
                woah.style.display="none"
            }
            checker()    
        }
    }
    
})


function correct(){
    click.setAttribute("disabled","disabled")
    let correctDiv=document.createElement("div")
    correctDiv.style.color="black"
    correctDiv.style.backgroundColor="#B6C867"
    correctDiv.appendChild(document.createTextNode("Correct Answer"))
    correctDiv.setAttribute("class","outputDiv")
    let data=document.querySelector(".data")
    data.appendChild(correctDiv)
    setTimeout(playAgain,3000)

    woah.style.display="none"
    remaining.style.display="none"
}
let remaining=document.querySelector("#remaining")
function checker(){
    
    if(chances===0){
        remaining.style.display="none"
        click.setAttribute("disabled","disabled")

        let correctDiv=document.createElement("div")
        correctDiv.appendChild(document.createTextNode("You lost,the number was "+ comp))
        correctDiv.setAttribute("class","outputDiv")

        let data=document.querySelector(".data")
        data.appendChild(correctDiv)
        setTimeout(playAgain,3000)
    }
    else{
        remaining.style.display="block"
        remaining.innerHTML=`Wrong Answer, you have ${chances} left `
    }
}

function playAgain(){
    woah.style.display="none"
    remaining.style.display="none"
    let again=confirm("You wanna play again?")
    
    if(again){
        compChooser()
        chosen.style.visibility="visible"
        document.querySelector(".outputDiv").remove()
        click.removeAttribute("disabled","disabled")
        comp=(Math.floor(Math.random()*21))
        chances=5
        console.log("next ",comp)
        chosen.innerHTML="Computer is picking a number"
        loader.style.display="block"
    }else{
        user_input.setAttribute("disabled","disabled")
        document.querySelector(".outputDiv").remove()
    }
}
