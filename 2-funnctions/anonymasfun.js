//Ex-1
document.write("<br>Ex 1<br>");
var fun_one = function () {
    return "Data from Database soon..";
};
document.write(fun_one + "--function definition <br>");
document.write(fun_one());
//Ex-2
document.write("<br>Ex 2<br>");
var fun_main = function () {
    return function () {
        return "Inner arrow function";
    };
};
document.write(fun_main() + "inner function definition<br>");
document.write(fun_main()() + "<br>");
//ex-3
document.write("<br>Ex 3<br>");
var db_fun = function (arg1, arg2) {
    document.write(arg1() + "<==>" + arg2());
};
var successCallBack = function () {
    return "Success..";
};
var errorCallBack = function () {
    return "Error..";
};
db_fun(successCallBack, errorCallBack);
//ex-4
document.write("<br>Ex 4<br>");
var fun_welocme = function () {
    return "Welcome";
};
var my_welcome = [];
for (var i = 0; i < 5; i++) {
    my_welcome.push(fun_welocme);
}
;
for (var i = 0; i < my_welcome.length; i++) {
    document.write(my_welcome[i]());
}
;
//ex-5
document.write("<br>Ex 5<br>");
var fun_Paytm = function (arg1, arg2, arg3) {
    document.write(arg1 + "<==>" + arg2 + "<==>" + arg3);
};
var fun_recharge = function () {
    return "Airtel recharge";
};
var fun_sendmoney = function () {
    return "Money sent to ram";
};
var fun_paymoney = function () {
    return "pay money to ram";
};
fun_Paytm(fun_recharge(), fun_sendmoney(), fun_paymoney());
