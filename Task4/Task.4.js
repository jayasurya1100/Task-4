// Ⅰ Comparing Two JSON:
var obj1={name:"Gopi",age:8},
obj2={age:8,name:"Gopi"};
var obj3 =JSON.stringify(obj1===obj2);
console.log("Comparing two json:",obj3);


// Ⅱ All Country Flags In Console:
var surya =new XMLHttpRequest();
surya.open("GET","https://restcountries.com/v3.1/all");
surya.send();
surya.responseType="json";
surya.onload= function P (){
var flags=surya.response;
console.log("Country Flages:")
for (let i in flags){
   
    console.log(+i+1,flags[i].flag);
}


}
// Ⅲ Country Details:
var anirudh =new XMLHttpRequest();
anirudh.open("GET","https://restcountries.com/v3.1/all");
anirudh.send();
anirudh.responseType="json";
anirudh.onload= function h (){
var country=anirudh.response;

console.log("Country Details:")
for (let i in country){
    console.log("S.No:"+i+1)
console.log(country[i].name.common)
console.log(country[i].population)
console.log(country[i].subregion)
}
}

// Ⅳ Simple Programs Todo For Variables:

//1.Declare four variables without asssigning value and print them in console:
var var1= 
console.log("variable without value :",var1);
var var2=
console.log("variable without value :",var2);
var var3= 
console.log("variable without value :",var3);
var var4= 
console.log("variable without value :",var4);

//2.How to get value of the variable myvar as output:
var myvar=10;
console.log("Myvar :",myvar);

//3.Declare variables to store your first name, last name, marital status, country and age in multiple lines:
var file={
    first_name:"surya",
    last_name:"T",
    marital_status:"unmarried",
    country:"india",
    age:"20"
}
console.log("multiple line :", file);

//4.Declare variables to store your first name, last name, marital status, country and age in a single line:
var file={first_name:"surya", last_name:"T", marital_status:"unmarried", country:"india", age:"20"}
console.log("single line :",JSON.stringify(file));

//5. Declare variables and assign string, boolean, undefined and null data types:
var data_type1="surya";
console.log("data type :",data_type1)
var data_type2=5 == 5;
console.log("data type :",data_type2);
var data_type3=
console.log("data type :",data_type3);
var data_type4=null;
console.log("data type :",data_type4);

//6.Convert the string to integer:
var integer1="8";
console.log("string to integer :",parseInt(integer1));
console.log("string to integer :",Number(integer1));
console.log("string to integer :",+(integer1));

//7. Write 6 statement which provide truthy & falsy values:
// *truthy values:
var truth1="string";
var truth2= 8;
var truth3=["array"];
console.log("truth value :",truth1);
console.log("truth value :",truth2);
console.log("truth value :",truth3);
// *falsey values:
var false1=null;
var false2="NaN"/5;
var false3=
console.log("false value :",false1);
console.log("false value :",false2);
console.log("false value :",false3);
