document.querySelector("#ajax").addEventListener("click",getEmployee);

function getEmployee(){

    let xhr=new XMLHttpRequest();
    xhr.open("GET","employee.json",true);
    xhr.send();

    xhr.onload=function(){
        if(this.status===200){
            let table=document.querySelector("#employees");

            let emploeyess=JSON.parse(this.responseText);
            emploeyess.forEach(element => {
                table.innerHTML+=`
                <tr>
                    <td>${element.name}</td>
                    <td>${element.Depertman}</td>
                    <td>${element.Salary}</td>
                </tr>
                `;
            });

        }
    }


}