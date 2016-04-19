
function $(id){
	return document.getElementById(id);
}
var chess=$('chess');
var run=$('run');
var go=$('go');
var left=$('left');
var right=$('right');
var back=$('back');


var initChessBoard = function (container, rows, columns) {
    var container = $(container);
    var table = document.createElement('table');
    table.className = 'chessboard-bg';
    var tbody = document.createElement('tbody');
    container.appendChild(table);
    table.appendChild(tbody);

    for (var i = 0; i <= rows; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j <= columns; j++) {
            var td = document.createElement('td');

            tr.appendChild(td);
            if (i == 0 && j == 0) {

            }
            else if (i == 0) {
                td.innerText = j;
            } else if (j == 0) {
                td.innerText = i;
            } else {
            }
        }
        tbody.appendChild(tr);
    }


    chess.className = directions[curDir];
    chess.style.left = 50 * x + 'px';

    chess.style.top = -50 * (columns - y + 1) + 'px';
};

var directions = ['top', 'right', 'bottom', 'left'];
var rows = 10;
var columns = 10;
var curDir = Math.floor(Math.random() * 4);
var chess = document.getElementById('chess');
var x = Math.floor(Math.random() * (rows - 1));
var y = Math.floor(Math.random() * (columns - 1));


var runRotage = function(cmd) {
    // 先转换成小写, 保证小写也可以
    cmd = cmd.toLowerCase();
    if (cmd == 'go') {
        var tmpX = x;
        var tmpY = y;
        if (curDir == 0) {
            tmpY -= 1;
        } else if (curDir == 1) {
            tmpX += 1;
        } else if (curDir == 2) {
            tmpY += 1;
        } else if (curDir == 3) {
            tmpX -= 1;
        } else {
            return;
        }

        // 不能超过棋盘边界
        if (tmpX <= 0 || tmpX > rows || tmpY <= 0 || tmpY > columns) {
            return;
        } else {
            x = tmpX;
            y = tmpY;
            chess.style.left = 50 * x + 'px';
            chess.style.top = -50 * (columns - y + 1) + 'px';
        }

    } else if (cmd == 'tun lef') {
        curDir = (curDir - 1);
        if (curDir < 0) {
            curDir = curDir + 4;
        }
    } else if (cmd == 'tun rig') {
        curDir = (curDir + 1) % 4;
    } else if (cmd == 'tun bac') {
        curDir = (curDir + 2) % 4;
    }
    // 根据新的方向, 设置对应的 class
    chess.className = directions[curDir];
};

var runBox = function() {
    var cmd = $('cmd');
    runRotage(cmd.value);
};

initChessBoard('chessboard', rows, columns);

run.onclick=function(){
    runBox();
}
go.onclick=function(){
    runRotage('go')
}
right.onclick=function(){
	runRotage('tun rig')
}
left.onclick=function(){
    runRotage('tun lef')
}
back.onclick=function(){
    runRotage('tun bac')
}
