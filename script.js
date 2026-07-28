const list = document.getElementById("characterList");
const profile = document.getElementById("profile");
const tree = document.getElementById("familyTree");


// ======================
// СПИСОК СЛЕВА
// ======================

characters.forEach(person => {

    const button = document.createElement("button");

    button.className = "characterButton";

    button.innerHTML = person.name;

    button.onclick = () => showProfile(person.id);

    list.appendChild(button);

});




// ======================
// КАРТОЧКА ПЕРСОНАЖА
// ======================

function showProfile(id){

    const person = characters.find(
        p => p.id === id
    );


    if(!person) return;



    profile.innerHTML = `

    <div class="profileCard">

    <img 
    class="profilePhoto"
    src="images/${person.photo}"
    >


    <h2>${person.name}</h2>


    <p>
    <b>Статус:</b>
    ${person.status}
    </p>


    <p>
    <b>Родители:</b><br>
    ${getPeople(person.parents)}
    </p>


    <p>
    <b>Партнёр:</b><br>
    ${getPerson(person.partner)}
    </p>


    <p>
    <b>Бывшие:</b><br>
    ${getPeople(person.exPartners)}
    </p>


    <p>
    <b>Дети:</b><br>
    ${getPeople(person.children)}
    </p>


    <h3>История</h3>

    <p>
    ${person.story}
    </p>


    </div>

    `;
}





// ======================
// ПОИСК ИМЕНИ
// ======================

function findPerson(id){

    return characters.find(
        p=>p.id===id
    );

}



function getPerson(id){

    if(!id)
        return "Нет";


    const person=findPerson(id);

    return person ? person.name : "Нет";

}



function getPeople(ids){

    if(!ids || ids.length===0)
        return "Нет";


    return ids.map(id=>{

        const person=findPerson(id);

        return person ? person.name : "";

    }).join("<br>");

}




// ======================
// СОЗДАНИЕ УЗЛА
// ======================


function createNode(id, type="main"){


    const person=findPerson(id);


    if(!person) return null;


    const div=document.createElement("div");


    div.className="treeNode " + type;



    div.onclick=()=>{
        showProfile(person.id);
    };



    div.innerHTML=`

    <img src="images/${person.photo}">

    <div class="treeName">
    ${person.name}
    </div>

    `;


    return div;

}




// ======================
// ЛИНИЯ
// ======================

function createLine(){

    const line=document.createElement("div");

    line.className="line";

    return line;

}





// ======================
// ПОКОЛЕНИЕ
// ======================


function createGeneration(nodes){


    const generation=document.createElement("div");

    generation.className="generation";


    nodes.forEach(node=>{

        if(node)
        generation.appendChild(node);

    });


    return generation;

}





// ======================
// ПОСТРОЕНИЕ ДЕРЕВА
// ======================


function drawTree(){


tree.innerHTML="";



// 1 поколение

tree.appendChild(
createGeneration([

createNode("alex","ex"),

createNode("elizabeth"),

createNode("thomas","partner")

])
);



tree.appendChild(createLine());




// 2 поколение

tree.appendChild(
createGeneration([

createNode("gabriella","ex"),

createNode("andrew"),

createNode("sheila","partner")

])
);



tree.appendChild(createLine());




// 3 поколение

tree.appendChild(
createGeneration([

createNode("serena"),

createNode("felix","partner")

])
);



tree.appendChild(createLine());




// 4 поколение

tree.appendChild(
createGeneration([

createNode("jeanette","ex"),

createNode("ares"),

createNode("lilith","partner")

])
);



tree.appendChild(createLine());




// 5 поколение

tree.appendChild(
createGeneration([

createNode("renesme"),

createNode("lolita"),

createNode("theodor")

])
);



}



drawTree();
