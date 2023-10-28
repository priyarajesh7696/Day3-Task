// Q1: How to compare two JSON have the same properties without order?
var obj1 = {name:"Person 1",age:5};
var obj2 = {age:5,name:"Person 1"};
var a = JSON.stringify(obj1);
var b = JSON.stringify(obj2)

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
console.log(a===b);
// false
    
console.log("****************************************");
//  Q2 : DISPLAY THE ALL THE COUNTRY FLAG IN THE CONSOLE

//!step 1:- Create a XHR Object
var request = new XMLHttpRequest();
//*step 2:- Opening a connection to the server
request.open("GET","https://restcountries.com/v3.1/all",true)
//step 3:- Initiating a bridge to the server / sending a request / sending a connection
request.send();
//!step 4:- server response
request.onload = function(){
    var data = request.response;
    //console.log(data);
    var result = JSON.parse(data);
    //console.log(result);
    //for accessing multiple values use looping
    for(var i=0;i<result.length;i++){
         console.log(result[i].flags.png);
     }
}

// Q3: Print all countries names,Regions,sub-regions and population
//step 1:- Create a XHR Object
var request1 = new XMLHttpRequest();
//step 2:- Opening a connection to the server
request1.open("GET","https://restcountries.com/v3.1/all",true)
//step 3:- Initiating a bridge to the server / sending a request / sending a connection
request1.send();
//step 4:- server response
request1.onload = function(){
    var data1 = request1.response;
    //console.log(data);
    var result1 = JSON.parse(data1);
    //console.log(result);
    //for accessing multiple values use looping
    for(var i=0;i<result1.length;i++){
         console.log(result1[i].name.common,"|",result1[i].region,"|",result1[i].subregion,"|",result1[i].population);
     }
}

