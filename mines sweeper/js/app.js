'use strict';

var gBoard = {
    size: 0,
    minesCount: 0,
    board: [],
};

function startGame(boardSize, minesCount) {
    gBoard.size = size;
    gBoard.minesCount = minesCount;

    buildBoard();
    addMines();
    drawBoard();
}

function buildBoard() {
    for (var i = 0; i < gBoard.size; i++) {
        gBoard.board.push([]);
        for (var j = 0; j < gBoard.size; j++) {
            gBoard.board[i][j] = {
                isShown: false,
                isMine: false,
                isMarked: false,
            };
        }
    }
}

function addMines() {
    let minesAdded = 0;
    while (minesAdded < gBoard.minesCount) {
        let row = getRandomInt(0, gBoard.size - 1);
        let col = getRandomInt(0, gBoard.size - 1);
        let randomCell = gBoard.board[i][j];
        if (isMine.randomCell === false) {
            isMine.randomCell === true;
            minesAdded++;
        }
    }
}

function drawBoard() {
    let table = document.querySelector('#minesweeper > table');
    let tableInnerHtml = '';
    for (var i = 0; i < gBoard.size; i++) {
        tableInnerHtml += '<tr>';
        for (var j = 0; j < gBoard.size; j++) {
            tableInnerHtml += `<td id="cell-${i}-${j}" 
            onclick="cellLeftClick(event,${i},${j})"
            oncontextclick="cellRightClick(event,${i},${j})"></div>`
        }
        tableInnerHtml += '</tr>';
    }
    table.innerHTML = tableInnerHtml;
}

function leftClick(i, j) {
    var cell = game.board[i][j];
    var elCell = document.querySelector(`#cell-${i}-${j}`);

    if (!game.isOn || cell.isFlag || cell.isShown) {
        return;
    }

    if (cell.isMine) {
        elCell.innerText = '💥';
        var audio = new Audio('https://www.mediacollege.com/downloads/sound-effects/explosion/explosion-02.wav');
        audio.play();
        game.isOn = false;
        elGameOver.style.visibility = 'visible';
        return;
    }
}

function rightClick(event, i, j) {
    if (!game.isOn) {
        return;
    }

    var cell = game.board[i][j];
    var elCell = document.querySelector(`#cell-${i}-${j}`);

    if (!cell.isFlag) {
        elCell.innerText = '🚩';
        cell.isFlag = true;
    } else {
        elCell.innerText = '';
        cell.isFlag = false;
    }

    event.preventDefault();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}