//Ex:1
document.write("Ex 1: <br>");
function namedFunction():string{
    return "I am a Named Functions";
};
document.write("<br>named function definition <br>"+namedFunction+"<br>");
document.write(namedFunction());

document.write("<br>Ex 2: <br>");
//Ex:2
function ExampleOne():any{
return ExampleTwo;
};
function ExampleTwo():any{
return "Data From DataBase Soon..";
};
document.write(" <br>Example two function definition <br>"+ExampleOne+"<br>");
document.write(ExampleOne()());
document.write("<br>Ex 3: <br>");
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
document.write("<br>Ex 4: <br>");
//ex:4
var number_arry:Array<number>=[];
var reverse_arry:Array<number>=[];
for(var i:number=1;i<=10;i++)
{
    number_arry.push(i);
    reverse_arry.unshift(i);
};
for(var i:number=0;i<number_arry.length;i++)
{
document.write(number_arry[i]+" reverse array "+reverse_arry[i]+"<br>");
};
document.write("<br>Ex 5: <br>");
//Ex:5
function fun_load():string{
return "Data from database soon..";

};
var my_loadArray:Array<any>=[];
for(var i:number=0;i<5;i++)
{
    my_loadArray.push(fun_load);
};
for(var i:number=0;i<my_loadArray.length;i++)
{
    document.write(my_loadArray[i]+" function definition<br>");
    document.write(my_loadArray[i]()+"<br>");
};
//Ex:6
document.write("<br>Ex 6: <br>");
function fun_Social(arg1:Array<any>):void
{
    for(var i:number=0;i<arg1.length;i++)
    {
        document.write(arg1[i]+"<br>");
    }

};

function fun_whatapp():string{
return "i am whatsapp";
};
function fun_telegram():string{
return "i am telegram";
};
var arr_socialApps:Array<any>=[fun_whatapp(),fun_telegram()];
fun_Social(arr_socialApps);