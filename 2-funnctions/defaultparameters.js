//ex1
document.write("<br>Ex:1<br>");
function fun_defaultarg(arg1, arg2, arg3) {
    if (arg1 === void 0) { arg1 = "Rams"; }
    document.write(arg1 + "--" + arg2 + "--" + arg3 + "--->");
}
;
fun_defaultarg(undefined, "angular7", "nodejs");
fun_defaultarg("miriyala", "angualrjs", "nodejs");
//ex2 default and normali
function fun_def_normal(arg1, arg2) {
    if (arg2 === void 0) { arg2 = "rams"; }
}
;
document.write("<br>Default and normal comnination " + fun_def_normal);
//ex 3 default and optional
function fun_def_optional(arg1, arg2) {
    if (arg1 === void 0) { arg1 = "rams"; }
}
;
document.write("<br>Default and optional:" + fun_def_optional);
//ex 4 default and rest parameter
function fun_def_rest(arg1) {
    if (arg1 === void 0) { arg1 = "rams"; }
    var arg2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg2[_i - 1] = arguments[_i];
    }
}
;
document.write("<br>Default and rest: " + fun_def_rest);
//ex 5 normal and optional and default and rest paraemters
function fun_allptypes(arg1, arg2, arg3) {
    if (arg3 === void 0) { arg3 = "rams"; }
    var arg4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        arg4[_i - 3] = arguments[_i];
    }
}
;
document.write("<br>All parametete types : " + fun_allptypes);
document.write("<br>");
document.write("Posititon 1: normal <br> position 2 & 3:optional & default (vise versa) <br> position 4: rest");
