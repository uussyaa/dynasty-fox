const list = document.getElementById("characterList");
const profile = document.getElementById("profile");
const tree = document.getElementById("familyTree");


// =======================
// СПИСОК ПЕРСОНАЖЕЙ
// =======================

characters.forEach(person => {

    let button = document.createElement("button");

    button.className = "characterButton";

    button.innerHTML = person.name;

    button.onclick = () => showProfile(person.id);

    list.appendChild(button);

});




// =======================
// КАРТОЧКА ПЕРСОНАЖА
// =======================


function showProfile(id){


let person = characters.find(
    item => item.id === id
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

${getNames(person.parents)}

</p>




<p>
<b>Партнёр:</b><br>

${getPartners(person.partners)}

</p>




<p>
<b>Бывшие:</b><br>

${getPartners(person.exPartners)}

</p>



<p>
<b>Дети:</b><br>

${getChildren(person.children)}

</p>




<h3>История</h3>

<p>
${person.story}
</p>



</div>


`;



}





// =======================
// ПОИСК ИМЁН
// =======================


function getNames(ids){


if(!ids || ids.length===0)

return "Не указаны";


return ids.map(id=>{

let person =
characters.find(p=>p.id===id);


return person ? person.name : id;


}).join("<br>");

}




function getChildren(ids){


if(!ids || ids.length===0)

return "Нет";


return ids.map(id=>{


let person =
characters.find(p=>p.id===id);


return person ? person.name : id;


}).join("<br>");

}




function getPartners(arr){


if(!arr || arr.length===0)

return "Нет";


return arr.map(p=>p.name).join("<br>");

}





// =======================
// ДРЕВО
// =======================


function createNode(person){


let div=document.createElement("div");


div.className="treeNode";


div.onclick=()=>showProfile(person.id);



div.innerHTML=`

<img src="images/${person.photo}">


<p>
${person.name}
</p>

`;


return div;


}




function drawTree(){



let root =
characters.find(
p=>p.id==="elizabeth"
);



let generation0 =
createNode(root);



tree.appendChild(generation0);



let children =
root.children;



children.forEach(id=>{


let child =
characters.find(
p=>p.id===id
);



let node =
createNode(child);


tree.appendChild(node);



});



}



drawTree();
