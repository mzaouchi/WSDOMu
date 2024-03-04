// document.getElementById('loubia').style.color = 'green'

// var a = document.getElementById('loubia')
// console.log(a)

// a.style.color = 'red'

// var b = document.getElementsByClassName('kafteji')
// console.log(b)

// b[0].style.color = 'green'
// b[1].style.color = 'orange'

// var c = document.getElementsByTagName('h2')
// console.log(c)


// var div = document.getElementById('principal')
// console.log(div)
// console.log(div.innerHTML)
// console.log(div.innerText)

// var mahmoud = document.createElement('button')
// mahmoud.innerText = "Jordan"
// div.appendChild(mahmoud)

// var titre = document.getElementById("loubia")
// titre.style.color = "red"

// var para = document.getElementsByClassName("kafteji")
// console.log(para)
// para[1].style.color = "orange"

// var titre = document.querySelector("#loubia")
// titre.style.color = 'red'

// var para = document.querySelector(".kafteji")
// para.style.color = "green"

// var btnP = document.querySelector('.btnP')

// btnP.addEventListener('click',function(){
//     btnP.previousElementSibling.innerText++    
// })

// var btnM = document.querySelector('.btnM')

// btnM.addEventListener('click',function(){
//     if (btnM.nextElementSibling.innerText>0) {
//         btnM.nextElementSibling.innerText--
//     }  
// })

var btnPs = document.querySelectorAll(".btnP")

for(let i = 0; i< btnPs.length; i++){
    btnPs[i].addEventListener('click',function(){
        btnPs[i].previousElementSibling.innerText++
    })
}

var btnMs = document.querySelectorAll('.btnM')

for(let i = 0; i<btnMs.length; i++){
    btnMs[i].addEventListener('click',function(){

        if(btnMs[i].nextElementSibling.innerText>0){
            btnMs[i].nextElementSibling.innerText--
        }        
    })
}