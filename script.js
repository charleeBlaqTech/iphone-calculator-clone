//dom elements setciion

//screen clock
const hourEL=document.querySelector('.hour');
const minuteEL=document.querySelector('.minute');
const displayEL=document.querySelector('.display-screen');

//calc dom
const allClear=document.querySelector('.ac');
const plusMinus=document.querySelector('.pm');
const percentEl=document.querySelector('.percent');

const additionEl=document.querySelector('.addition');
const subtractionEl=document.querySelector('.subtraction');
const divisionEl=document.querySelector('.division');
const multEl=document.querySelector('.multiplication');
const equalEl=document.querySelector('.equal');

const decimalEl=document.querySelector('.decimal');
const zero=document.querySelector('.number-0');


//THE DIGITAL CLOCK SECTION

function updateTime(){
    const currentDate= new Date();

    const currentHour= currentDate.getHours()
    const currentMinute= currentDate.getMinutes()

    hourEL.innerHTML= currentHour.toString().padStart(2,0)
    minuteEL.innerHTML=currentMinute.toString().padStart(2,0)
}
setInterval(updateTime, 1000);
updateTime();



//OPERATION SECTION
let firstValue=0
let secondValue=0
let operator=null;

additionEl.addEventListener("click",function(){
    firstValue=parseFloat(displayEL.textContent);
    displayEL.innerText=""
    displayEL.textContent="+"
    operator=displayEL.textContent;
    displayEL.textContent=""
    return firstValue + ""+ operator + ""

})
subtractionEl.addEventListener("click",function(){
    firstValue=parseFloat(displayEL.textContent);
    displayEL.innerText=""
    displayEL.textContent="-"
    operator=displayEL.textContent;
    displayEL.textContent=""
    return firstValue + ""+ operator + ""

})
multEl.addEventListener("click",function(){
    firstValue=parseFloat(displayEL.textContent);
    displayEL.innerText=""
    displayEL.textContent="*"
    operator=displayEL.textContent;
    displayEL.textContent=""
    return firstValue + ""+ operator + ""

})
divisionEl.addEventListener("click",function(){
    firstValue=parseFloat(displayEL.textContent);
    displayEL.innerText=""
    displayEL.textContent="/"
    operator=displayEL.textContent;
    displayEL.textContent=""
    return firstValue + ""+ operator + ""

})
percentEl.addEventListener("click",function(){
    firstValue=parseFloat(displayEL.textContent);
        displayEL.innerText=""
            displayEL.textContent="%"
                operator=displayEL.textContent;
                     displayEL.textContent=""
    return  `${firstValue + operator}`

})
equalEl.addEventListener('click', function(){
    secondValue=parseFloat(displayEL.innerText);
    displayEL.textContent=""
    if(operator==="-"){
        displayEL.innerText=parseFloat(`${firstValue-secondValue}`)
    }else if(operator==="+"){
        displayEL.innerText=parseFloat(`${firstValue+secondValue}`)
    }else if(operator==="/"){
        displayEL.innerText=parseFloat(`${firstValue/secondValue}`)
    }else if(operator==="*"){
        displayEL.innerText=parseFloat(`${firstValue*secondValue}`)
    }else if(operator==="%"){
         displayEL.innerText=parseFloat(`${firstValue%secondValue}`)
    }else{
        displayEL.innerText="error syntax"
    }
    
});




//DECIMAL POINT SECTION
decimalEl.addEventListener("click",function(){
    if(!displayEL.textContent.includes(".")){
        displayEL.textContent +="."
    }
})

//====================================================================
//BUTTON NUMBER SECTION
document.querySelectorAll("#number").forEach(function(btn){
    btn.addEventListener("click",function(){
        if(displayEL.innerText.length<9 && displayEL.innerText !=="0"){
            displayEL.innerText+=btn.innerText;
        }else if(displayEL.innerText.length>9 || displayEL.innerText =="0"){
            displayEL.innerText=""
            displayEL.innerText+=btn.innerText;
        }
    })
})

//==============================================================================
//zero section
zero.addEventListener('click',function(){
    if(!displayEL.innerText=="" && displayEL.innerText.length<9){
        displayEL.textContent+=0
    }
})

//all clear button section
allClear.addEventListener("click",function(){
    displayEL.textContent=""
})




//HEADER AND NAVBAR SECTION

const hamburger=document.getElementById('hamburg')
const unoder=document.getElementById('unoder1')
hamburger.addEventListener("click", function(){
    document.querySelector('.hamburger').classList.toggle("active");
    document.querySelector('.nav-links').classList.toggle("active");
})