//Ex:1
function namedFunction() {
    return "I am a Named Functions";
}
;
document.write("<br>named function definition <br>" + namedFunction + "<br>");
document.write(namedFunction());
//Ex:2
function ExampleOne() {
    return ExampleTwo;
}
;
function ExampleTwo() {
    return "Data From DataBase Soon..";
}
;
document.write(" <br>Example two function definition <br>" + ExampleOne + "<br>");
document.write(ExampleOne()());
//Ex:3
function fun_palace(arg1, arg2, arg3) {
    document.write("<br>" + arg1 + "<br>" + arg2 + "<br>" + arg3 + "<br>");
    document.write(arg1() + "....." + arg2() + "...." + arg3() + "<br>");
}
;
function fun_Queen() {
    return "i am a Queeen..";
}
;
function fun_king() {
    return "i am a king..";
}
;
function funb_minister() {
    return "i am a minister..";
}
;
fun_palace(fun_king, fun_Queen, funb_minister);
