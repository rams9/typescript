//number datatype
var var_one = 100;
var var_two = 100.12345; //double or float
var var_three = 0X123ABC; //hexdecimal
var var_four = 83; //oct
var var_five = 10; //binary
document.write(var_one + "Integer <br>" + var_two + "double / float <br>"
    + var_three + " hexadecimal<br>" + var_four + " octa <br>" + var_five + "binary<br>");
//string datatype 
//in typescript we can declare string as 3 types
document.write("<br>***********string DataTypes**********<br>");
var var_six = "welcome";
var var_seven = 'single quote string';
var var_eight = '${var_six}';
document.write(var_six + "<br>" + var_seven + "<br>" + var_eight + "<br>");
//boolean datatype
document.write("<br>***********boolean DataTypes**********<br>");
var var_nine = true; //we can use false also
document.write(var_nine + "");
document.write("<br>***********any DataTypes**********<br>");
//any datatype
var var_any = "welcome";
document.write(var_any + "any datatype");
//Array datatype
//syntax
//var arrayname:Array<dataType>=[];
//var arrayname:datatype[]=[];
var array_one = [10, 20, 30, 40, 50];
var array_two = [60, 70, 80, 90, 100];
//for loop
for (var i = 0; i < array_one.length; i++) {
    document.write(array_one[i] + "<br>" + array_two[i] + "<br>");
}
;
//string array 
var arr_three = ["Angular7", "NodeJS", "mongodb"];
var arr_four = ["C#", "C#.Net", "Asp.net"];
for (var i = 0; i < arr_three.length; i++) {
    document.write(arr_three[i] + "<br>" + arr_four[i] + "<br>");
}
//hetrogeneous elements array
var ary_five = [
    { "p_id": 1, "p_name": "ram", "p_salary": 100 },
    { "p_id": 2, "p_name": "ravi", "p_salary": 200 },
    { "p_id": 3, "p_name": "surya", "p_salary": 300 }
];
for (var i = 0; i < ary_five.length; i++) {
    document.write(ary_five[i].p_id + "--" + ary_five[i].p_name + "--" + ary_five[i].p_salary);
}
