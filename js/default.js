
function mywife(fname = "Arpita",lname ="Bhatachariya"){
    console.log(fname," ",lname);
}
mywife("Rupayan","Bera");

// default parameter with object


function helloji(value = {ht:23,wt:89}) {
    console.log("My weight is : ",value);
}
helloji(56);


// default parameter with array 

function naku( arr = ["Rupayan","Arpita"]){
        console.log(arr);
}

naku(78);


// function as a parameter

let returnkar = ()=>{
      return 230;
}
let aiims = returnkar();
console.log(aiims);
function hiiiiii(name2,age=aiims){
      console.log(name2,age);
}
hiiiiii("Rupayan");