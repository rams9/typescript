//ex1
document.write("<br>Ex:1<br>");
function fun_defaultarg(arg1:string="Rams",arg2:string,arg3:string):void{
document.write(arg1+"--"+arg2+"--"+arg3+"--->")
};
fun_defaultarg(undefined,"angular7","nodejs");
fun_defaultarg("miriyala","angualrjs","nodejs");
//ex2 default and normali
function fun_def_normal(arg1:string,arg2:string="rams"):void{

};
document.write("<br>Default and normal comnination "+ fun_def_normal);
//ex 3 default and optional
function fun_def_optional(arg1:string="rams",arg2?:string):void{

};
document.write("<br>Default and optional:"+ fun_def_optional);
//ex 4 default and rest parameter
function fun_def_rest(arg1:string="rams",...arg2:string[]):void
{

};
document.write("<br>Default and rest: "+ fun_def_rest);
//ex 5 normal and optional and default and rest paraemters
function fun_allptypes(arg1:string,arg2?:string,arg3:string="rams",...arg4:string[]):void
{

};
document.write("<br>All parametete types : "+fun_allptypes);
document.write("<br>");
document.write("Posititon 1: normal <br> position 2 & 3:optional & default (vise versa) <br> position 4: rest")