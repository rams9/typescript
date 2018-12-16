//ex1
document.write("EX:1 <br>");
function fun_rest() {
    var arg1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg1[_i] = arguments[_i];
    }
    for (var i = 0; i < arg1.length; i++) {
        document.write(arg1[i] + "--");
    }
    ;
}
;
fun_rest(10);
fun_rest(10, 20);
fun_rest(10, 20, 30);
//ex2
document.write("<br>EX:2<br>");
function fun_norm_rest(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    if (arg1 != undefined) {
        document.write(arg1 + "");
    }
    for (var i = 0; i < arg2.length; i++) {
        document.write(arg2[i] + "--");
    }
    ;
}
;
fun_norm_rest(10);
fun_norm_rest(10, 20, 30, 40);
fun_norm_rest(undefined, 10, 20, 30);
//Ex:3
document.write("<br> Ex:3: More the one rest parameter <br>we can't declare more then one rest parameter");
