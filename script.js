const userName = prompt("What is your name?")
alert(`Hello ${userName}, guess a number between 1 - 100!`)


let number = Math.floor(Math.random() * 100) + 1; //RANDOM NUMBER SELECTED BY COMPUTER
function numberClick() {
   
    let input = document.querySelector('input[id="guessNum"]').value; //NUMBER I PUT IN
        if(input == number) {
            alert(`GREAT ${userName}, you guessed the computer's number!!😃`)
        } else if(input < number) {
            alert(`Sorry ${userName}, your number is too low. TRY AGAIN`)
        } else if(input > number) {
            alert(`Sorry ${userName}, your number is too high. TRY AGAIN`)
        } else {
            alert('Try Again!')
        }
        
    }


