  


 function playGame(nameone){
  document.querySelector('.player_one').innerHTML = nameone
   let  randomNumber1 = Math.floor(Math.random()*6+1) 

    let selectedButtons = document.getElementsByClassName('ply-1');
    if(randomNumber1 == 1){
        document.querySelector('.ply-1-1').style.backgroundColor ="white"
        document.querySelector('.ply-1-2 ').style.backgroundColor ="black"
        document.querySelector('.ply-1-3 ').style.backgroundColor ="black"
        document.querySelector('.ply-1-4 ').style.backgroundColor ="black"
        document.querySelector('.ply-1-5 ').style.backgroundColor ="black"
        document.querySelector('.ply-1-6 ').style.backgroundColor ="black"
        

        
    }
    else if(randomNumber1 == 2){
        document.querySelector('.ply-1-1').style.backgroundColor ="white"
        document.querySelector('.ply-1-2').style.backgroundColor ="black"
        document.querySelector('.ply-1-3 ').style.backgroundColor ="black"
        document.querySelector('.ply-1-4 ').style.backgroundColor ="black"
        document.querySelector('.ply-1-5 ').style.backgroundColor ="black"
        document.querySelector('.ply-1-6 ').style.backgroundColor ="white"
        
              
    }
    else if(randomNumber1 == 3){
        document.querySelector('.ply-1-1 ').style.backgroundColor ="black"
        document.querySelector('.ply-1-2 ').style.backgroundColor ="black"
        document.querySelector('.ply-1-3 ').style.backgroundColor ="white"
        document.querySelector('.ply-1-4 ').style.backgroundColor ="white"
        document.querySelector('.ply-1-5 ').style.backgroundColor ="black"
        document.querySelector('.ply-1-6 ').style.backgroundColor ="white"
        
    }
    else if(randomNumber1 == 4){
        document.querySelector('.ply-1-1 ').style.backgroundColor ="white"
        document.querySelector('.ply-1-2 ').style.backgroundColor ="black"
        document.querySelector('.ply-1-3 ').style.backgroundColor ="white"
        document.querySelector('.ply-1-4 ').style.backgroundColor ="white"
        document.querySelector('.ply-1-5 ').style.backgroundColor ="black"
        document.querySelector('.ply-1-6 ').style.backgroundColor ="white"
        
    }
    else if(randomNumber1 == 5){
        document.querySelector('.ply-1-1 ').style.backgroundColor ="white"
        document.querySelector('.ply-1-2 ').style.backgroundColor ="white"
        document.querySelector('.ply-1-3 ').style.backgroundColor ="white"
        document.querySelector('.ply-1-4 ').style.backgroundColor ="white"
        document.querySelector('.ply-1-5 ').style.backgroundColor ="black"
        document.querySelector('.ply-1-6 ').style.backgroundColor ="white"

    }
    else if(randomNumber1 == 6){
        document.querySelector('.ply-1-1 ').style.backgroundColor ="white"
        document.querySelector('.ply-1-2 ').style.backgroundColor ="white"
        document.querySelector('.ply-1-3 ').style.backgroundColor ="white"
        document.querySelector('.ply-1-4 ').style.backgroundColor ="white"
        document.querySelector('.ply-1-5 ').style.backgroundColor ="white"
        document.querySelector('.ply-1-6 ').style.backgroundColor ="white"

    }

   

   return randomNumber1 
   


} 
function playerGame2(nametwo){

    document.querySelector('.player_Two').innerHTML = nametwo
    let  randomNumber2 = Math.floor(Math.random()*6+1) 
    let selectedButtons = document.getElementsByClassName('ply-2');
    if(randomNumber2 == 1){
        document.querySelector('.ply-2-1').style.backgroundColor ="white"
        document.querySelector('.ply-2-2 ').style.backgroundColor ="black"
        document.querySelector('.ply-2-3 ').style.backgroundColor ="black"
        document.querySelector('.ply-2-4 ').style.backgroundColor ="black"
        document.querySelector('.ply-2-5 ').style.backgroundColor ="black"
        document.querySelector('.ply-2-6 ').style.backgroundColor ="black"
        

        
    }
    else if(randomNumber2 == 2){
        document.querySelector('.ply-2-1').style.backgroundColor ="white"
        document.querySelector('.ply-2-2').style.backgroundColor ="black"
        document.querySelector('.ply-2-3 ').style.backgroundColor ="black"
        document.querySelector('.ply-2-4 ').style.backgroundColor ="black"
        document.querySelector('.ply-2-5 ').style.backgroundColor ="black"
        document.querySelector('.ply-2-6 ').style.backgroundColor ="white"
        
              
    }
    else if(randomNumber2 == 3){
        document.querySelector('.ply-2-1 ').style.backgroundColor ="black"
        document.querySelector('.ply-2-2 ').style.backgroundColor ="black"
        document.querySelector('.ply-2-3 ').style.backgroundColor ="white"
        document.querySelector('.ply-2-4 ').style.backgroundColor ="white"
        document.querySelector('.ply-2-5 ').style.backgroundColor ="black"
        document.querySelector('.ply-2-6 ').style.backgroundColor ="white"
        
    }
    else if(randomNumber2 == 4){
        document.querySelector('.ply-2-1 ').style.backgroundColor ="white"
        document.querySelector('.ply-2-2 ').style.backgroundColor ="black"
        document.querySelector('.ply-2-3 ').style.backgroundColor ="white"
        document.querySelector('.ply-2-4 ').style.backgroundColor ="white"
        document.querySelector('.ply-2-5 ').style.backgroundColor ="black"
        document.querySelector('.ply-2-6 ').style.backgroundColor ="white"
        
    }
    else if(randomNumber2 == 5){
        document.querySelector('.ply-2-1 ').style.backgroundColor ="white"
        document.querySelector('.ply-2-2 ').style.backgroundColor ="white"
        document.querySelector('.ply-2-3 ').style.backgroundColor ="white"
        document.querySelector('.ply-2-4 ').style.backgroundColor ="white"
        document.querySelector('.ply-2-5 ').style.backgroundColor ="black"
        document.querySelector('.ply-2-6 ').style.backgroundColor ="white"

    }
    else if(randomNumber2 == 6){
        document.querySelector('.ply-2-1 ').style.backgroundColor ="white"
        document.querySelector('.ply-2-2 ').style.backgroundColor ="white"
        document.querySelector('.ply-2-3 ').style.backgroundColor ="white"
        document.querySelector('.ply-2-4 ').style.backgroundColor ="white"
        document.querySelector('.ply-2-5 ').style.backgroundColor ="white"
        document.querySelector('.ply-2-6 ').style.backgroundColor ="white"

    }
   
   
  }


  




  function registerName(){
    let name1 = prompt('Enter first players name').toUpperCase()
   
    document.querySelector(".player-name1").innerHTML = name1
    let name2 = prompt('Enter second players name').toUpperCase()

    document.querySelector(".player-name2").innerHTML = name2
    document.querySelector('.player_one').innerHTML = name1;

    document.querySelector('.player_Two').innerHTML =name2
    return {name1 , name2}
   }
 
 
  let names =  registerName()
  let nameone = names.name1
 
  let nametwo = names.name2

    setInterval(()=>{
        let show = document.querySelector('.display').innerText
        if(show.innerText =='dice game'){
            show.innerText = 'roll the dices with friend'
        }
        else if(show.innerText =="roll the dices with friend"){
            show.innerText = "see who wins"
        }
        else if(show.innerText=="see who wins"){
            show.innerText = "dice game"
        }
        }, 3000)
  
 


   




    

   
   
       