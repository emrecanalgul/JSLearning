const person={
    name:"Emre Can",
    age:25,
    salary:2000
};
const langs=["Python","Java","C++","Php"];
const name="Emrecan";

// For In
//Object
for(let prop in person){
    console.log(prop,person[prop]);
}

//Array
for(let index in langs){
    console.log(index,langs[index]);
}

//String
for(let i in name){
    console.log(i,name[i]);
}

//For Of
//Object -> For Of kullanılmaz
// for(let value of person){
//     console.log(value);
// }

//Array
for(let value of langs){
    console.log(value);
}

//String
for(let char of name){
    console.log(char);
}