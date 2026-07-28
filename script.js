
let characters = {


elizabeth: {

name:"Elizabeth Fox",

status:"Жива",

photo:"images/elizabeth.jpg",

parents:"Неизвестно",

children:"Andrew Fox",

story:
"Основательница династии Fox."

},


renesme: {

name:"Renesme Fox",

status:"Жива",

photo:"images/renesme.jpg",

parents:
"Ares Fox, Janette Florencio",

children:
"Будущие дети",

story:
"Студентка Foxbury Institute. Изучает биологию."

}


};



function show(id){


let c = characters[id];


document.getElementById("character").innerHTML=`

<div class="card">

<h2>${c.name}</h2>


<img src="${c.photo}">


<p>
<b>Статус:</b> ${c.status}
</p>


<p>
<b>Родители:</b> ${c.parents}
</p>


<p>
<b>Дети:</b> ${c.children}
</p>


<p>
<b>История:</b><br>
${c.story}
</p>


</div>

`;

}
