const cardBody=document.querySelectorAll(".card-body")[1];
const title=document.querySelector("#tasks-title");

//Click Event
// title.addEventListener("click",run);

//Double Click
// title.addEventListener("dblclick",run);

//Mouse Down
// title.addEventListener("mousedown",run);

//Mouse Over -> Üzerine geldiğinde
// title.addEventListener("mouseover",run);
//Mouse Out -> Üzerinden çıktığında
// title.addEventListener("mouseout",run)

//CardBody altındaki elemelerde etkilenir
// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);

//Mouse Enter ve Mouse Leave 
//CardBody altındaki elemelerde etkilmez. Sadece CardBody alanı Dinlenilir.
cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);



function run(e){
    console.log(e.type);
}