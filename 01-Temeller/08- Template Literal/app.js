const name = "Emre Can Algül";
const department = "IT";
const salary = 4000;

const a = "İsim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary + "\n";
console.log(a);

const templateLiteral = `İSİM:${name}\nDepertman:${department}\nMaaş:${salary}`;
console.log(templateLiteral);

function hello() {
    return "Merhaba";
}

const html = `
        <ul>
            <li>${name}</li>
            <li>${department}</li>
            <li>${salary}</li>
            <li>${10 / 4}</li>
            <li>${hello()}</li>
        </ul>
`;

document.body.innerHTML = html;