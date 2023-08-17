const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    //select div with id 'root'
    const root = document.getElementById('root');
    root.style.display = "flex";
    root.style.flexDirection = "column";

    //create DOM element for h1
    const h1 = document.createElement('h1');
    //assign a value to h1 
    h1.innerHTML = "FREELANCERS";
    //styling for h1 *Using an external CSS file is way cleaner looking, but I figured I'd try using just JS for this workshop 
    h1.style.textAlign = "center";
    h1.style.borderBottom = "4px solid black"
    //append h1 as child to root div
    root.appendChild(h1);

    // ul element
    const ul = document.createElement('ul');
    ul.style.textAlign = "center";
    root.appendChild(ul);
    
    for (let i = 0; i < users.length; i++) {
        const li = document.createElement('li');
        //assign innerHTML of li to have name, age, and occupation and capitalize just the first letter of the occupation
        li.innerHTML = `${users[i].name} |
        ${users[i].age} | 
        ${(users[i].occupation).charAt(0).toUpperCase() + users[i].occupation.slice(1)}`;

        //Styles for li 
        li.style.color = "black";
        li.style.margin = "1.5rem";
        li.style.padding = "1.5rem";
        li.style.listStyle = "none";
        li.style.fontSize = "24px";
        li.style.border = "1px solid lightblue";
        li.style.boxShadow = "10px 10px lightblue";

        ul.appendChild(li);
    }
}

//call the main function
main();