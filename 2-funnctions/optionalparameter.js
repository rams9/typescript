document.write("<br> Ex:1 <br>");
function fun_optional(arg1, arg2, arg3) {
    if (arg1 != undefined) {
        document.write(arg1 + "--");
    }
    if (arg2 != undefined) {
        document.write(arg2 + "--");
    }
    if (arg3 != undefined) {
        document.write(arg3 + "--");
    }
}
;
fun_optional();
fun_optional("angualr7", "nodejs", "mongodb");
fun_optional("angularjs", undefined, "couchdb");
fun_optional("ram");
//ex2
document.write("<br> Ex:2 <br>");
function fun_rest_opt(arg1) {
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
    if (arg1 != undefined) {
        document.write(arg1 + "--");
    }
    for (var i = 0; i < arg2.length; i++) {
        document.write(arg2[i] + "--");
    }
}
;
fun_rest_opt("Angualr7", "nodejs", "mongodb");
fun_rest_opt(undefined, "angularjs", "couchdb");
//Ex3
document.write("<br> Ex 3:<br>");
function fun_norm_rest_opt(arg1, arg2) {
    var arg3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arg3[_i - 2] = arguments[_i];
    }
    document.write(arg1 + "--");
    if (arg2 != undefined) {
        document.write(arg2);
    }
    for (var i = 0; i < arg3.length; i++) {
        document.write(arg3[i] + "--");
    }
    ;
}
;
fun_norm_rest_opt("angular7", undefined, "ram", "teja");
document.write("<br>position of arguments should be like this <br>");
document.write("@normal  ===> optional ==> Rest");
