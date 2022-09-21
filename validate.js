//Check if each row, col and section does not contain current value! if they do return false.
//Navigating sections is tricky, totalSections increase when col and row %3===0, current section changes every 3 columns.
var isValidSudoku = function (board) {
  let info = new Map();
  let count = 0;
  let current = 0;
  for (let i = 0; i < board.length; i++) {
    if (i % 3 === 0) current = count;
    for (let j = 0; j < board[i].length; j++) {
      if (j % 3 === 0 && i % 3 === 0) count++;
      if (j % 3 === 0) current++;
      let value = parseInt(board[i][j]);
      if (isNaN(value)) continue;
      let prop = "has" + value;
      if (info.has("row" + i)) {
        let rowInfo = info.get("row" + i);
        if (rowInfo[prop] !== undefined) return false;
        info.set("row" + i, { ...rowInfo, [prop]: true });
      } else {
        info.set("row" + i, { [prop]: true });
      }
      if (info.has("col" + j)) {
        let colInfo = info.get("col" + j);
        if (colInfo[prop] !== undefined) return false;
        info.set("col" + j, { ...colInfo, [prop]: true });
      } else {
        info.set("col" + j, { [prop]: true });
      }
      if (info.has("sec" + current)) {
        let secInfo = info.get("sec" + current);
        if (secInfo[prop] !== undefined) return false;
        info.set("sec" + current, { ...secInfo, [prop]: true });
      } else {
        info.set("sec" + current, { [prop]: true });
      }
    }
    current -= 3;
  }
  return true;
};
