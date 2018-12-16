//Ex:1
var class_one = /** @class */ (function () {
    function class_one() {
        this.sub_one = "Angualr 7";
        this.sub_two = "Node js";
        this.sub_three = "MongoDb";
    }
    ;
    class_one.prototype.getSubone = function () {
        return this.sub_one;
    };
    ;
    class_one.prototype.getSubTwo = function () {
        return this.sub_two;
    };
    ;
    class_one.prototype.getThree = function () {
        return this.sub_three;
    };
    ;
    return class_one;
}());
;
var obj = new class_one();
document.write(obj.getSubone() + "==>" + obj.getSubTwo() + "==>" + obj.getThree() + "<br>");
//Ex 2
var First_class = /** @class */ (function () {
    function First_class() {
    }
    First_class.prototype.my_fun = function () {
        return new Second_class();
    };
    ;
    return First_class;
}());
;
var Second_class = /** @class */ (function () {
    function Second_class() {
    }
    Second_class.prototype.my_fun = function () {
        return "Welcome to classes<br>";
    };
    ;
    return Second_class;
}());
;
var objfirst = new First_class();
document.write(objfirst.my_fun().my_fun());
var obj1 = new First_class();
var obj2 = obj1.my_fun();
var message = obj2.my_fun();
document.write(message);
//Ex 3
var Third_class = /** @class */ (function () {
    function Third_class(arg1, arg2, arg3) {
        this.sub_one = arg1;
        this.sub_two = arg2;
        this.sub_three = arg3;
    }
    ;
    Third_class.prototype.getSubject = function () {
        return this.sub_one + "==>" + this.sub_two + "==>" + this.sub_three;
    };
    ;
    return Third_class;
}());
;
var objt = new Third_class("Rams", "Miriyala", "my");
document.write(objt.getSubject());
