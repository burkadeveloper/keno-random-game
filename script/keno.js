



   
let ArrySelected = []

    function select20() {
        while (ArrySelected.length < 20) {
          let selectRandom = Math.floor(Math.random() * 80 + 1);
          if (!ArrySelected.includes(selectRandom)) {
            ArrySelected.push(selectRandom);
          }
        }
        return ArrySelected;
      }
 



let nums = select20();

function playGme(){
    if (nums.length > 0) { // Check if there are still elements in the nums array
      let randomIndex = Math.floor(Math.random() * nums.length);
      let randomNum = nums[randomIndex];
      document.querySelector('.res-drwn').innerHTML = randomNum
      nums.splice(randomIndex, 1); // Remove the selected element from the nums array
      let button_Numbers = document.querySelectorAll('.numbers-section');
      button_Numbers.forEach((btn) => {
        if (btn.innerHTML == randomNum) {
          btn.classList.add('selected');
        }
      });
    }
    
  }






let intervalId = null; // Declare intervalId in a higher scope

const controller = () => {
  intervalId = setInterval(() => {
    playGme()
    
  }, 1000)
  return intervalId
}

const cear = () => {
  if (intervalId) { // Check if intervalId is set
    clearInterval(intervalId)
    intervalId = null; // Reset intervalId to null
  }
  document.querySelectorAll('.numbers-section').forEach((btn) => {
    btn.style.backgroundColor = 'white';
    btn.style.color = 'black';
    
  })
  window.location.reload()
}
// document.querySelectorAll('.numbers-section').forEach((btn)=>{
//     btn.style.fontSize = '1.5rem'
//     btn.style.fontFamily = 'arial'
// })
 


