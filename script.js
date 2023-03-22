const chessBoard = document.getElementById('board');

function whiteFirst() {
    for (let i = 0; i < 4; i++) {
        const white = document.createElement('div');
        const black = document.createElement('div');
        
        white.classList.add('white');
        black.classList.add('black');

        chessBoard.appendChild(white);
        chessBoard.appendChild(black);
    }
}

function blackFirst() {
    for (let i = 0; i < 4; i++) {
        const black = document.createElement('div');
        const white = document.createElement('div');
        
        black.classList.add('black');
        white.classList.add('white');

        chessBoard.appendChild(black);
        chessBoard.appendChild(white);
    }
}

for (let i = 0; i < 4; i++) {
    whiteFirst();
    blackFirst();
}
