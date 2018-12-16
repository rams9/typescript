//json 
//ex 1
var firstjosn = {
    sub_one: "angualr7",
    sub_two: "Nodejs",
    sub_three: "mongodb"
};
document.write(firstjosn.sub_one + "==>" + firstjosn.sub_two + "==>" + firstjosn.sub_three);
//ex 2
var secondjson = {
    login: Login,
    logout: Logout,
    setCredentials: SetCredentials,
    clearCredentials: ClearCredentials
};
function Login() {
    return "Welcome to Login Module..";
}
;
function Logout() {
    return "welcome to Logot Module..";
}
;
function SetCredentials() {
    return "welcome to Set credentials module..";
}
;
function ClearCredentials() {
    return "welcome to Clear Credentials module..";
}
;
document.write(secondjson.login() + "<br>" + secondjson.logout() + "<br>" + secondjson.setCredentials() + "<br>" + secondjson.clearCredentials());
//ex 3
var databasejson = {
    oracle: function () { return "oracle connect soon.."; },
    mysql: function () { return "mysql connect soon"; },
    mssql: function () { return "msqsql connect soon"; },
    mongodb: function () { return "mongodb connect soon"; }
};
document.write(databasejson.oracle() + "<br>" +
    databasejson.mysql() + "<br>" +
    databasejson.mssql() + "<br>" +
    databasejson.mongodb());
//ex 4
var products = [
    { "p_id": 1, "p_name": "rams", "p_cost": 1000 },
    { "p_id": 2, "p_name": "surya", "p_cost": 2000 },
    { "p_id": 3, "p_name": "rana", "p_cost": 3000 },
    { "p_id": 4, "p_name": "sai", "p_cost": 4000 },
    { "p_id": 5, "p_name": "virendra", "p_cost": 5000 }
];
for (var i = 0; i < products.length; i++) {
    var obj = products[i];
    document.write(obj.p_id + " " + obj.p_name + " " + obj.p_cost + "<br>");
}
//ex:5
var cdata = [{ "name": "Afghanistan", "topLevelDomain": [".af"], "alpha2Code": "AF", "alpha3Code": "AFG", "callingCodes": ["93"], "capital": "Kabul", "altSpellings": ["AF", "Afġānistān"], "region": "Asia", "subregion": "Southern Asia", "population": 27657145, "latlng": [33.0, 65.0], "demonym": "Afghan", "area": 652230.0, "gini": 27.8, "timezones": ["UTC+04:30"], "borders": ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"], "nativeName": "افغانستان", "numericCode": "004", "currencies": [{ "code": "AFN", "name": "Afghan afghani", "symbol": "؋" }], "languages": [{ "iso639_1": "ps", "iso639_2": "pus", "name": "Pashto", "nativeName": "پښتو" }, { "iso639_1": "uz", "iso639_2": "uzb", "name": "Uzbek", "nativeName": "Oʻzbek" }, { "iso639_1": "tk", "iso639_2": "tuk", "name": "Turkmen", "nativeName": "Türkmen" }], "translations": { "de": "Afghanistan", "es": "Afganistán", "fr": "Afghanistan", "ja": "アフガニスタン", "it": "Afghanistan", "br": "Afeganistão", "pt": "Afeganistão", "nl": "Afghanistan", "hr": "Afganistan", "fa": "افغانستان" }, "flag": "https://restcountries.eu/data/afg.svg", "regionalBlocs": [{ "acronym": "SAARC", "name": "South Asian Association for Regional Cooperation", "otherAcronyms": [], "otherNames": [] }], "cioc": "AFG" }, { "name": "Åland Islands", "topLevelDomain": [".ax"], "alpha2Code": "AX", "alpha3Code": "ALA", "callingCodes": ["358"], "capital": "Mariehamn", "altSpellings": ["AX", "Aaland", "Aland", "Ahvenanmaa"], "region": "Europe", "subregion": "Northern Europe", "population": 28875, "latlng": [60.116667, 19.9], "demonym": "Ålandish", "area": 1580.0, "gini": null, "timezones": ["UTC+02:00"], "borders": [], "nativeName": "Åland", "numericCode": "248", "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "€" }], "languages": [{ "iso639_1": "sv", "iso639_2": "swe", "name": "Swedish", "nativeName": "svenska" }], "translations": { "de": "Åland", "es": "Alandia", "fr": "Åland", "ja": "オーランド諸島", "it": "Isole Aland", "br": "Ilhas de Aland", "pt": "Ilhas de Aland", "nl": "Ålandeilanden", "hr": "Ålandski otoci", "fa": "جزایر الند" }, "flag": "https://restcountries.eu/data/ala.svg", "regionalBlocs": [{ "acronym": "EU", "name": "European Union", "otherAcronyms": [], "otherNames": [] }], "cioc": "" }, { "name": "Albania", "topLevelDomain": [".al"], "alpha2Code": "AL", "alpha3Code": "ALB", "callingCodes": ["355"], "capital": "Tirana", "altSpellings": ["AL", "Shqipëri", "Shqipëria", "Shqipnia"], "region": "Europe", "subregion": "Southern Europe", "population": 2886026, "latlng": [41.0, 20.0], "demonym": "Albanian", "area": 28748.0, "gini": 34.5, "timezones": ["UTC+01:00"], "borders": ["MNE", "GRC", "MKD", "KOS"], "nativeName": "Shqipëria", "numericCode": "008", "currencies": [{ "code": "ALL", "name": "Albanian lek", "symbol": "L" }], "languages": [{ "iso639_1": "sq", "iso639_2": "sqi", "name": "Albanian", "nativeName": "Shqip" }], "translations": { "de": "Albanien", "es": "Albania", "fr": "Albanie", "ja": "アルバニア", "it": "Albania", "br": "Albânia", "pt": "Albânia", "nl": "Albanië", "hr": "Albanija", "fa": "آلبانی" }, "flag": "https://restcountries.eu/data/alb.svg", "regionalBlocs": [{ "acronym": "CEFTA", "name": "Central European Free Trade Agreement", "otherAcronyms": [], "otherNames": [] }], "cioc": "ALB" }, { "name": "Algeria", "topLevelDomain": [".dz"], "alpha2Code": "DZ", "alpha3Code": "DZA", "callingCodes": ["213"], "capital": "Algiers", "altSpellings": ["DZ", "Dzayer", "Algérie"], "region": "Africa", "subregion": "Northern Africa", "population": 40400000, "latlng": [28.0, 3.0], "demonym": "Algerian", "area": 2381741.0, "gini": 35.3, "timezones": ["UTC+01:00"], "borders": ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"], "nativeName": "الجزائر", "numericCode": "012", "currencies": [{ "code": "DZD", "name": "Algerian dinar", "symbol": "د.ج" }], "languages": [{ "iso639_1": "ar", "iso639_2": "ara", "name": "Arabic", "nativeName": "العربية" }], "translations": { "de": "Algerien", "es": "Argelia", "fr": "Algérie", "ja": "アルジェリア", "it": "Algeria", "br": "Argélia", "pt": "Argélia", "nl": "Algerije", "hr": "Alžir", "fa": "الجزایر" }, "flag": "https://restcountries.eu/data/dza.svg", "regionalBlocs": [{ "acronym": "AU", "name": "African Union", "otherAcronyms": [], "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"] }, { "acronym": "AL", "name": "Arab League", "otherAcronyms": [], "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"] }], "cioc": "ALG" }];
for (var i = 0; i < cdata.length; i++) {
    var obj = cdata[i];
    document.write(obj.name + ".." +
        obj.capital + ".." +
        obj.currencies[0].code + ".." +
        "<img width='100px' height='50px' src=" + obj.flag + "> <br> <br>");
}
;
//ex:7
var wwdata = {
    "records": [
        { "Name": "Alfreds Futterkiste", "City": "Berlin", "Country": "Germany" },
        { "Name": "Ana Trujillo Emparedados y helados", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Antonio Moreno Taquería", "City": "México D.F.", "Country": "Mexico" },
        { "Name": "Around the Horn", "City": "London", "Country": "UK" },
        { "Name": "B's Beverages", "City": "London", "Country": "UK" }, { "Name": "Berglunds snabbköp", "City": "Luleå", "Country": "Sweden" }, { "Name": "Blauer See Delikatessen", "City": "Mannheim", "Country": "Germany" }, { "Name": "Blondel père et fils", "City": "Strasbourg", "Country": "France" }, { "Name": "Bólido Comidas preparadas", "City": "Madrid", "Country": "Spain" }, { "Name": "Bon app'", "City": "Marseille", "Country": "France" }, { "Name": "Bottom-Dollar Marketse", "City": "Tsawassen", "Country": "Canada" }, { "Name": "Cactus Comidas para llevar", "City": "Buenos Aires", "Country": "Argentina" }, { "Name": "Centro comercial Moctezuma", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Chop-suey Chinese", "City": "Bern", "Country": "Switzerland" }, { "Name": "Comércio Mineiro", "City": "São Paulo", "Country": "Brazil" }
    ]
};
for (var i = 0; i < wwdata.records.length; i++) {
    var obj = wwdata.records[i];
    document.write(obj.Name + "---" + obj.City);
}
;
var oracle = function () {
    return "Oracle database connect soon..";
};
var mysql = function () {
    return "mysql database connect soon..";
};
var data = {
    oracle: oracle,
    mysql: mysql
};
document.write(data.oracle() + "<br>" +
    data.mysql() + "<br>");
