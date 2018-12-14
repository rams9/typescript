//number datatype
var var_one:number=100;
var var_two:number=100.12345; //double or float
var var_three:number =0X123ABC;//hexdecimal
var var_four:number = 0o123; //oct
var var_five:number =0b1010; //binary

document.write(var_one+"Integer <br>"+var_two+"double / float <br>"
+var_three+" hexadecimal<br>"+var_four+" octa <br>"+var_five+"binary<br>");
//string datatype 
//in typescript we can declare string as 3 types
document.write("<br>***********string DataTypes**********<br>");
var var_six:string="welcome";
var var_seven:string='single quote string';
var var_eight:string='${var_six}';

document.write(var_six+"<br>"+var_seven+"<br>"+var_eight+"<br>");
//boolean datatype
document.write("<br>***********boolean DataTypes**********<br>");
var var_nine:boolean=true; //we can use false also
document.write(var_nine+"");
document.write("<br>***********any DataTypes**********<br>");
//any datatype
var var_any:any="welcome";
document.write(var_any+"any datatype");
//Array datatype
//syntax
//var arrayname:Array<dataType>=[];
//var arrayname:datatype[]=[];

var array_one:Array<number>=[10,20,30,40,50];
var array_two:number[]=[60,70,80,90,100];

//for loop
for(var i:number=0;i<array_one.length;i++)
{
document.write(array_one[i]+"<br>"+array_two[i]+"<br>");

};

//string array 
var arr_three:Array<string>=["Angular7","NodeJS","mongodb"];
var arr_four:string[]=["C#","C#.Net","Asp.net"];
for(var i:number=0;i<arr_three.length;i++)
{
    document.write(arr_three[i]+"<br>"+arr_four[i]+"<br>");

}

//hetrogeneous elements array

var ary_five:Array<any>=[
    {"p_id":1,"p_name":"ram","p_salary":100},
    {"p_id":2,"p_name":"ravi","p_salary":200},
    {"p_id":3,"p_name":"surya","p_salary":300}
];
for(var i:number=0;i<ary_five.length;i++)
{
    document.write(ary_five[i].p_id+"--"+ary_five[i].p_name+"--"+ary_five[i].p_salary);

}


