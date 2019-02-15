// Yeni Element Oluşturma

const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className="btn btn-danger";
newLink.href="https://www.google.com.tr";
newLink.target="_blank";

newLink.appendChild(document.createTextNode("Google"));
cardBody.appendChild(newLink);