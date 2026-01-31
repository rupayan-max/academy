// // object cloning with spread operator 

// let firstobject={
//     name : "Arpita Bhatachariya",
//     age : 22,
//     food : "Rabri"
// }

// // clone start 
// let secondobject={...firstobject};

// firstobject.love="Rupayan Bera";
// console.log(firstobject);
// console.log(secondobject);


// object clonning using assign method 


let objectclone={
    name : "Arpita",
    husband_name : "Rupayan",
    age : 23,
    wife_age:22
}

let dest = Object.assign({},objectclone);
objectclone.happy="Yes";
console.log(dest);
console.log(objectclone);
// clone successfully