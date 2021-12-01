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

const selectElement = (type, name, title, options) => {
   let optionsToSelect = "";

    for (const option of options) {
        optionsToSelect += `
        <option>
            ${option}
        </option>
        `;
   }
    return `
        <div>
            <label>${title}</label> 
            <${type} name="${name}">
                ${optionsToSelect}
            </${type}
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
        ${inputElement("checkbox", "newsLetter", "Hírlevelet szeretnél kapni")}
        ${inputElement("checkbox", "terms", "Elfogadom a felhasználási feltételeket")}
        ${selectElement("select", "where", "Hol hallottál rólunk?", ["Interneten", "Ismerőstől", "Egyéb"])}
        <button>Ok</button>
    </form>
`;

const formSubmit = (event) =>{
    event.preventDefault();
    const et = event.target;
    console.log(et);
    et.classList.add("submitted");

    let selectValue = et.querySelector(`select[name="where"]`).value;
    console.log(selectValue);
};

const inputUpdate = (event) =>{

    if (event.target.getAttribute("name") === "firstName"){
        document.getElementById("inputValue").innerHTML = event.target.value;                 
    };
   
    console.log(event.target.closest("#form"));

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

