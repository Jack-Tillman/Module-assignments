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
    //create DOM element for h1
    const h1 = document.createElement('h1');
    //assign a value to h1 
    h1.innerHTML = "FREELANCERS";
    //append h1 as child to root div
    root.appendChild(h1);
    //header for Name, Age, and Occupation 
    const h2 = document.createElement('h2');
    h2.innerHTML = "NAME AGE OCCUPATION";
    root.appendChild(h2);

    // ul element
    const ul = document.createElement('ul');
    root.appendChild(ul);
    
    // loop through users and create li for each item
    for (let i = 0; i < users.length; i++) {
        const li = document.createElement('li');
        //assign innerHTML of li to have name, age, and occupation and capitalize just the first letter of the occupation
        li.innerHTML = `${users[i].name} 
        ${users[i].age}  
        ${(users[i].occupation).charAt(0).toUpperCase() + users[i].occupation.slice(1)}`;

        ul.appendChild(li);

    //  STYLING SECTION *Using an external CSS file is way cleaner looking, but I figured I'd try using just JS for this workshop 

    //  root styling
        root.style.display = "flex";
        root.style.flexDirection = "column";
        root.style.backgroundColor = "#d2f8e5";
        root.style.fontFamily = "Helvetica";
    
    //  h1 styling
        h1.style.textAlign = "center";
        h1.style.borderBottom = "4px solid black";
    
    //  h2 styling
        h2.style.textAlign = "center";
        h2.style.borderBottom = "2px solid black";
        h2.style.margin = "1rem 14.5rem";
        h2.style.wordSpacing = "28rem";
    
    //  ul styling
        ul.style.textAlign = "center";
        ul.style.display = "flex";
        ul.style.flexDirection = "column";
        ul.style.alignItems = "space-evenly";
        ul.style.justifyItems = "space-evenly";
        ul.style.flex = "0";
    
    //  li styling
        li.style.color = "black";
        li.style.margin = "1rem 8em"
        li.style.padding = "2rem 8rem 2rem 8rem";
        li.style.listStyle = "none";
        li.style.fontSize = "24px";
        li.style.border = "1px solid black";
        li.style.boxShadow = "10px 10px black";
        li.style.wordSpacing = "30rem";
        li.style.display = "flex"
        li.style.justifyContent = "left"
    };
};

//call the main function
main();

