let value;

const firstName = "Louis";
const lastName = "Armstrong";
const langs = "Java,Python,C++";

value = firstName + " " + lastName; //Louis Armstrong

value = "Emre Can";
value += " Algül"; //Emre Can Algül

value = firstName.length; //Yazının karakter sayısını döner. 5

value = firstName.concat(" ", lastName, " ", "Astronot", " ", langs); //Verilen Strigleri uc uca ekleme yapar

value = firstName.toLowerCase(); // Tüm Karakterleri Küçük Harfleri Şeklinde Yazar.
value = firstName.toUpperCase(); //Tüm Karakterleri Büyük Harfleri Şeklinde Yazar.

value = firstName[0]; //L
value = firstName[3]; //i
value = firstName[firstName.length - 1]; //Son Elemanı Elde Ederiz.


value = firstName.indexOf("L"); //String içinde arama yapar. Eğer bulursa karakterin indexini döner. Karakter yok ise de -1 değerini döner.
value = firstName.indexOf("l"); //Büyük Küçük Harf Duyarlılığı vardır: -1
value = firstName.charAt(0); //L

value = langs.split(","); //Belirtilen karaktere göre stringi parçalar arraya dönüştürür. //["Java","Python","C++"]

value = langs.replace("Python", "CSS"); //Belirtilen alanı değiştirmemizi sağlar.

value = langs.includes("Java"); //Belirli alanları sorgulamak için kullanılır. Varsa True, Yoksa: False Döner

