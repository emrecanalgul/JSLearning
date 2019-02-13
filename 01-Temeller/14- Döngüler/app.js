//While Döngüleri
//Kuşul True olduğu sürece while blogundaki kodlar çalışır.

let i=0;
while(i<10){
    i++;
    console.log(i);
}

//Break ve Continue
while(i<10){
    console.log(i);
    if(i==5){
        console.log("Döngüden Çıkılıyor.");
        break; //Koşula bakılmaksızın dongüden çıkar.
    }
    i++;
}

while(i<10){
    console.log(i);
    if(i==5 ||i==3){
        i++;
        continue; //Döngüde bundan sonraki kodlar çalıştırılmaz. Döngünün başına dönülür.
    }
    i++;
}

//Do While Döngüleri //Döngü kesinlikle en az 1 kere çalışır.

let d=0;
do{
    console.log(d)
}while(i<10);

//For Döngüleri
const langs=["Python","JS","C#","MVC"]

for(let k=0; k<langs.length; k++){
    console.log(langs[k]);
}

//While İle
let index=0;
while(index<langs.length){
    console.log(langs[index]);
    index++;
}

//Foreach 
langs.forEach(function(lang,index){
    console.log(lang,index);
})

//MAP 
const users=[
    {name:"EmreCan",age:25},
    {name:"Can",age:25},
    {name:"Mehmet",age:25},
    {name:"Veli",age:25},

];

const names=users.map(function(user){
        return user.name;
}); //Çıktısı: ["Emre","Can","Mehmet","Veli"]
const ages=users.map(function(user){
    return user.age;
});
console.log(names);
console.log(ages);

//For in döngüleri
const user={
    name:"Emre",
    age:21,
}

for(let key in user){
    console.log(key,user[key]);
}
