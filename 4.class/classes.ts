//Ex:1

class class_one
{
    private sub_one:string;
    private sub_two:string;
    private sub_three:string;
    constructor() {
        this.sub_one="Angualr 7";
        this.sub_two="Node js";
        this.sub_three="MongoDb";
        };
        
public getSubone():string{
    return this.sub_one;
    };
public getSubTwo():string{
return this.sub_two;
};    
public getThree():string{
return this.sub_three;
};

};

var obj:class_one = new class_one();
document.write(obj.getSubone() +"==>" +obj.getSubTwo()+"==>"+obj.getThree()+"<br>");

//Ex 2
class First_class{

 public my_fun():any{
        return new Second_class();
    };

};
class Second_class{
public my_fun():string{
return "Welcome to classes<br>";
};
};
var objfirst:First_class= new First_class();
document.write(objfirst.my_fun().my_fun());
var obj1:First_class= new First_class();
var obj2:Second_class= obj1.my_fun();
var message:string=obj2.my_fun();
document.write(message);

//Ex 3
class Third_class{
    private sub_one:string;
    private sub_two:string;
    private sub_three:string;
constructor(arg1:string,arg2:string,arg3:string)
{
    this.sub_one=arg1;
    this.sub_two=arg2;
    this.sub_three=arg3;

};
public getSubject():string{
return this.sub_one + "==>"+ this.sub_two+"==>"+this.sub_three;
};

};

var objt:Third_class= new Third_class("Rams","Miriyala","my");
document.write(objt.getSubject());
//ex 4

class class_pk{
    private var_one:class_ms;
    private var_two:class_aa;
    private var_three:class_rc;

    constructor(arg1:class_ms,arg2:class_aa,arg3:class_rc)
    {
        this.var_one=arg1;
        this.var_two=arg2;
        this.var_three=arg3;

    };
 public myfun():string{
return this.var_one.myfun()+"<==>"+this.var_two.myfun()+"<==>"+this.var_three.myfun();
 };
};
class class_ms{
public myfun():string{
return "Angular7";
};
};
class class_aa{
    public myfun():string{
        return "NodeJs";
        };
};
class class_rc{
    public myfun():string{
        return "mongoDb";
        };
};

var myobj:class_pk= new class_pk(new class_ms(),new class_aa(),new class_rc());
document.write("<br>"+myobj.myfun());
//ex 5
class class_based{
public myfun_one():string{
return "i am from class based..";
};
};

class class_derived extends class_based{
public myfun_two():string{
    return "i am from derived class..";
}
};

var based:class_based= new class_based();
document.write("<br>"+based.myfun_one());
var derived:class_derived= new class_derived();
document.write("<br>"+derived.myfun_one()+"<==>"+derived.myfun_two());

//ex 6
class oracle{
public oracleConnection():string{
return "oracle connection soon..";
};
};
class mysql extends oracle{
public mysqlConnection(): string {
return "my sql connection soon..";
};
};
class mssql extends mysql{
public mssqlConnection():string{
return "ms sql connection soon..";
};
};
 var objOracle:oracle= new oracle();
 document.write(objOracle.oracleConnection());
var objMysql:mysql= new mysql();
document.write(objMysql.oracleConnection()+"<==>"+objMysql.mysqlConnection());
var objMssql:mssql= new mssql();
document.write(objMssql.oracleConnection()+"<br>"+objMssql.mysqlConnection()+"<br>"+objMssql.mssqlConnection());
// 









