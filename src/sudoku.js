
export default function Checker(row, column) {
  this.row = row;
  this.column = column;
}

Checker.prototype.rowCheck = function() {
  let rows = [];
  for (let i = 1 ; i <= 9; i++) {
    if(rows[i] < 1 || rows[i] > 9){
      return false;
    }
  }
  return true;
};

