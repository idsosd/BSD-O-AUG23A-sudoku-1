let sudoku_string = "<ul>";
for(i = 1; i <= 81; i++){
    //sudoku_string += "<li><span>" + i + "</span></li>";
    sudoku_string += `<li><input class="form-control text-center" value="${i}"></li>`;
}
document.getElementById("sudoku").innerHTML = sudoku_string;