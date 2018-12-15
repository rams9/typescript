//Ex-1

document.write("<br>Ex 1<br>");
var fun_one=():string =>{
return "Data from Database soon..";

};
document.write(fun_one+"--function definition <br>");
document.write(fun_one());

//Ex-2
document.write("<br>Ex 2<br>");

var fun_main=():any =>
{
    return ():string =>{
            return "Inner arrow function";
    };
};
document.write(fun_main()+"inner function definition<br>");
document.write(fun_main()()+"<br>");

//ex-3
document.write("<br>Ex 3<br>");

var db_fun=(arg1:any,arg2:any):void =>
{
document.write(arg1()+"<==>"+arg2());
};
var successCallBack=():string => {
return "Success..";
};
var errorCallBack=():string => {
return "Error..";
};
db_fun(successCallBack,errorCallBack);

//ex-4
document.write("<br>Ex 4<br>");
var fun_welocme=():string =>
{
return "Welcome";
};
var my_welcome:Array<any>=[];
for(var i:number=0;i<5;i++)
{
    my_welcome.push(fun_welocme);

};
for(var i:number=0;i<my_welcome.length;i++)
{

document.write(my_welcome[i]());
};


//ex-5
document.write("<br>Ex 5<br>");
var fun_Paytm=(arg1:any,arg2:any,arg3:any):void =>
{
    document.write(arg1 + "<==>" + arg2 + "<==>"+arg3 );

};
var fun_recharge=():string =>
{
return "Airtel recharge";
};
var fun_sendmoney=():string =>
{
return "Money sent to ram";
};
var fun_paymoney=():string =>
{

return "pay money to ram";
};
fun_Paytm(fun_recharge(),fun_sendmoney(),fun_paymoney());




















