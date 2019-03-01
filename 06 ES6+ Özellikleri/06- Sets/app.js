//Sets -> Uniq Değerleri alır.

const mySet=new Set();

mySet.add(100);
mySet.add(100); //Eklenmez
mySet.add(100); //Eklenmez
mySet.add(3.14);
mySet.add("Emre");
mySet.add(false);
mySet.add([1,1,1]);
mySet.add({a:1,b:2});

console.log(mySet);

//Size
console.log(mySet.size);

//Delete
mySet.delete("Emre");

//Has -> Varmı
console.log(mySet.has(100));