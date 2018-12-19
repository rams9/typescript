//Ex:1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//ex 4
var class_pk = /** @class */ (function () {
    function class_pk(arg1, arg2, arg3) {
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    }
    ;
    class_pk.prototype.myfun = function () {
        return this.var_one.myfun() + "<==>" + this.var_two.myfun() + "<==>" + this.var_three.myfun();
    };
    ;
    return class_pk;
}());
;
var class_ms = /** @class */ (function () {
    function class_ms() {
    }
    class_ms.prototype.myfun = function () {
        return "Angular7";
    };
    ;
    return class_ms;
}());
;
var class_aa = /** @class */ (function () {
    function class_aa() {
    }
    class_aa.prototype.myfun = function () {
        return "NodeJs";
    };
    ;
    return class_aa;
}());
;
var class_rc = /** @class */ (function () {
    function class_rc() {
    }
    class_rc.prototype.myfun = function () {
        return "mongoDb";
    };
    ;
    return class_rc;
}());
;
var myobj = new class_pk(new class_ms(), new class_aa(), new class_rc());
document.write("<br>" + myobj.myfun());
//ex 5
var class_based = /** @class */ (function () {
    function class_based() {
    }
    class_based.prototype.myfun_one = function () {
        return "i am from class based..";
    };
    ;
    return class_based;
}());
;
var class_derived = /** @class */ (function (_super) {
    __extends(class_derived, _super);
    function class_derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_derived.prototype.myfun_two = function () {
        return "i am from derived class..";
    };
    return class_derived;
}(class_based));
;
var based = new class_based();
document.write("<br>" + based.myfun_one());
var derived = new class_derived();
document.write("<br>" + derived.myfun_one() + "<==>" + derived.myfun_two());
//ex 6
var oracle = /** @class */ (function () {
    function oracle() {
    }
    oracle.prototype.oracleConnection = function () {
        return "oracle connection soon..";
    };
    ;
    return oracle;
}());
;
var mysql = /** @class */ (function (_super) {
    __extends(mysql, _super);
    function mysql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    mysql.prototype.mysqlConnection = function () {
        return "my sql connection soon..";
    };
    ;
    return mysql;
}(oracle));
;
var mssql = /** @class */ (function (_super) {
    __extends(mssql, _super);
    function mssql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    mssql.prototype.mssqlConnection = function () {
        return "ms sql connection soon..";
    };
    ;
    return mssql;
}(mysql));
;
var objOracle = new oracle();
document.write(objOracle.oracleConnection());
var objMysql = new mysql();
document.write(objMysql.oracleConnection() + "<==>" + objMysql.mysqlConnection());
var objMssql = new mssql();
document.write(objMssql.oracleConnection() + "<br>" + objMssql.mysqlConnection() + "<br>" + objMssql.mssqlConnection());
