/* 
1) 
function functionName(parameter) {
    parameter === "Argument as a string"
};
Meghívás: functionName("Argument as a string")
                                        Különbség közöttük: const-hoz azelőtt nem férünk hozzá, mielőtt leírtuk. A függvény simán pedig elérhető korábban is, meghívható korábban. Consttal hamarabb kapunk hibakódo.
2) 
const argument = "Argument saved in a variable";
const functionName = function () {
    parameter === "Argument saved in a variable";
};

Meghívás: functionName(argument);

3) const functionName  = (parameter1, parameter2) => {
        parameter1 === 1;
        parameter2 === 2;
};
Meghívás: functionName(1, 2);

*/

const inputElement = (type, name, title) => {
    return `
        <div>
            <label>${title}</label> 
            <input type="${type}" name="${name}">
        </div>
    `;
};

/*
const formElement = "<form>" + inputElement("text", "firstName") + inputElement("file", "profilePicture") + inputElement("email", "personalEmail") + inputElement("radio", "newsLetter") + inputElement("checkbox", "terms") + "</form>";
*/

const formElement = `
    <form id="form">
        ${inputElement("text", "firstName", "Keresztneved")}
        ${inputElement("file", "profilePicture", "Profilképed")}
        ${inputElement("email", "personalEmail", "Email címed")}
        ${inputElement("radio", "newsLetter", "Hírlevelet szeretnél kapni")}
        ${inputElement("checkbox", "terms", "Elfogadom a felhasználási feltételeket")}
        <button>Ok</button>
    </form>
`;

const formSubmit = (event) =>{
    event.preventDefault();
    console.log(event.target);
    event.target.classList.add("submitted");
};

const inputUpdate = (event) =>{
    document.getElementById("inputValue").innerHTML = event.target.value; 
};

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML('afterbegin', formElement);
    root.insertAdjacentHTML('afterbegin', `
    <div id="inputValue"></div>
    `);

    const form = document.getElementById("form");

    form.addEventListener('submit', formSubmit);

    const inputList = form.querySelectorAll("input");

    for (const input of inputList) {
        input.addEventListener("input", inputUpdate);        
    }
}

window.addEventListener("load", loadEvent);

