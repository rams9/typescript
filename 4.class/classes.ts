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

    constructor(arg1:any,arg2:any,arg3:any)
    {

    };
 public myfun():string{
//return this.arg1+"==>"+this.arg2+"==>"+this.arg3;
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

var myobj:class_pk= new class_pk(new class_ms().myfun(),new class_aa().myfun(),new class_rc().myfun());
myobj.myfun









