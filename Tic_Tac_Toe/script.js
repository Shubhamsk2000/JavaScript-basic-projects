const gameBoard = document.getElementById('game-board');
const infoDispay = document.getElementById('info');

const startCell = [
    "", "", "","", "", "","", "", "",
];
let go = "circle"
infoDispay.textContent = "It is now CIRCLE's turn"

const createBoard = () =>{
    startCell.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('square');
    cellElement.id = index;
    cellElement.addEventListener('click', addGo)
    gameBoard.append(cellElement);
    });

};

function addGo(e){
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle";
    infoDispay.textContent = `It is now ${go.toUpperCase()}'s turn`;
    e.target.removeEventListener('click', addGo);
    checkScore();
}
createBoard();

function checkScore(){
    const allSquares = document.querySelectorAll('.square');
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    winningCombos.forEach(array => {
      let circleWin =  array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'));
      if(circleWin){
        infoDispay.textContent = "Circle Wins !!!!!"
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
      }
    })
    winningCombos.forEach(array => {
      let crossWin =  array.every(cell => allSquares[cell].firstChild?.classList.contains('cross'));
      if(crossWin){
        infoDispay.textContent = "Cross Wins !!!!!"
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
      }
    })

}


