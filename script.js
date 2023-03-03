const buttons = document.querySelectorAll('.sector div');
const scoreBoard = document.querySelectorAll('span')
const clear = document.querySelector('#clear')
console.log(buttons)
let amountClicked = {'red':0, 'yellow':0, 'green':0}
buttons.forEach(button => {
    button.onclick = () =>{
        amountClicked[button.id] += 1;
        scoreBoard.forEach(score =>{
            if (score.id == `${button.id}s`){
                score.innerText =amountClicked[button.id]
            }
        })
    }
});
clear.onclick = () =>{
    scoreBoard.forEach(scores =>{
        scores.innerText= 0;
        amountClicked = {'red':0, 'yellow':0, 'green':0}
    })
}