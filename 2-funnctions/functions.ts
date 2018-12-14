//Ex:1

function namedFunction():string{
    return "I am a Named Functions";
};
document.write("<br>named function definition <br>"+namedFunction+"<br>");
document.write(namedFunction());

//Ex:2
function ExampleOne():any{
return ExampleTwo;
};
function ExampleTwo():any{
return "Data From DataBase Soon..";
};
document.write(" <br>Example two function definition <br>"+ExampleOne+"<br>");
document.write(ExampleOne()());

//Ex:3
function fun_palace(arg1:any,arg2:any,arg3:any):void{
    document.write("<br>"+arg1+"<br>"+arg2+"<br>"+arg3+"<br>");
document.write(arg1()+"....."+arg2()+"...."+arg3()+"<br>");
};
function fun_Queen():string{
return "i am a Queeen..";
};
function fun_king():string{
    return "i am a king..";
};
function funb_minister():string{
return "i am a minister..";
};
fun_palace(fun_king,fun_Queen,funb_minister);

