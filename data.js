const characters = [

{
id:"elizabeth",
name:"Элизабет Фокс",
photo:"eli.png",
status:"Умерла от старости",

generation:1,

parents:[],

partner:"thomas",

exPartners:[
"alex"
],

children:[
"andrew"
],

story:
`Элизабет Фокс — основательница династии.

Однажды преданная мужем ради собственной сестры, она не стала мстить и не позволила боли сломать себя. Она ушла туда, где садится солнце, и начала новую жизнь.

Позже судьба оставила на её пороге чужого ребёнка — дочь людей, которые причинили ей боль. Но Элизабет приняла её, потому что умела прощать не словами, а поступками.

Так началась история семьи Фокс — рода, где любовь всегда идёт рядом с потерями, а сила рождается из испытаний.`
},


{
id:"alex",
name:"Алекс Фокс",
photo:"alex.png",
status:"Жив",

generation:1,

parents:[],

partner:null,

exPartners:[
"elizabeth"
],

children:[
"andrew"
],

story:
`Алекс Фокс — первый супруг Элизабет и отец наследника второго поколения Эндрю.

Его предательство стало одним из первых испытаний в истории семьи Фокс.`
},


{
id:"thomas",
name:"Томас Фокс",
photo:"thomas.png",
status:"Жив",

generation:1,

parents:[],

partner:"elizabeth",

exPartners:[],

children:[],

story:
`Томас Фокс появился в жизни Элизабет после тяжёлого периода.

Рядом с ним она смогла обрести спокойствие и новый дом, ставший частью начала династии.`
},


{
id:"andrew",
name:"Эндрю Фокс",
photo:"andrw.png",
status:"Умер от старости",

generation:2,

parents:[
"elizabeth",
"alex"
],

partner:"sheila",

exPartners:[
"gabriella"
],

children:[
"serena"
],

story:
`Эндрю Фокс — наследник второго поколения.

Он продолжил род своей матери и стал связующим звеном между прошлым и будущим семьи Фокс. Его жизнь была наполнена сложными решениями, любовью и потерями.`
},


{
id:"gabriella",
name:"Габриелла Фокс",
photo:"gabriella.png",
status:"Жива",

generation:2,

parents:[],

partner:null,

exPartners:[
"andrew"
],

children:[
"serena"
],

story:
`Габриелла Фокс — мать Серены и часть истории второго поколения.

Её отношения с Эндрю стали одной из важных глав прошлого семьи.`
},


{
id:"sheila",
name:"Шейла Фокс",
photo:"sheila.png",
status:"Жива",

generation:2,

parents:[],

partner:"andrew",

exPartners:[],

children:[],

story:
`Шейла Фокс стала супругой Эндрю и частью продолжения рода Фокс.`
},


{
id:"serena",
name:"Серена Фокс",
photo:"Ser.png",
status:"Умерла от болезни",

generation:3,

parents:[
"andrew",
"gabriella"
],

partner:"felix",

exPartners:[],

children:[
"raquel",
"ares"
],

story:
`Серена Фокс стала следующим поколением династии.

Несмотря на короткую жизнь, она оставила после себя наследие — двух детей, которые продолжили историю семьи.`
},

  {
id:"felix",

name:"Феликс Сенека",

photo:"felix.png",

status:"Умер",

generation:3,

parents:[],

partner:"serena",

exPartners:[],

children:[
"raquel",
"ares"
],

story:
`Феликс Сенека — супруг Серены Фокс и отец следующего поколения.

Его история навсегда осталась частью семьи Фокс через детей, которые продолжили род.`
},


{
id:"raquel",

name:"Ракель Фокс-Сенека",

photo:"raquel.png",

status:"Жива",

generation:4,

parents:[
"serena",
"felix"
],

partner:"margo",

exPartners:[],

children:[],

story:
`Ракель Фокс-Сенека — дочь Серены и Феликса.

Она представляет отдельную ветвь семьи, сохраняя связь с наследием Фокс через своё происхождение.`
},


{
id:"margo",

name:"Марго Дюбуа",

photo:"margo.png",

status:"Жива",

generation:4,

parents:[],

partner:"raquel",

exPartners:[],

children:[],

story:
`Марго Дюбуа стала супругой Ракель и частью семьи Фокс-Сенека.`
},


{
id:"ares",

name:"Арес Фокс",

photo:"ars.png",

status:"Жив",

generation:4,

parents:[
"serena",
"felix"
],

partner:"lilith",

exPartners:[
"jeanette"
],

children:[
"renesme",
"lolita",
"theodor"
],

story:
`Арес Фокс — продолжатель главной линии династии.

Его жизнь была наполнена сложными отношениями и важными выборами. От союза с Жаннет Тоскано появилась Ренесме, а позже рядом с Лилит он создал новую семью.

Именно через Ареса история Фокс переходит к пятому поколению.`
},


{
id:"jeanette",

name:"Жаннет Тоскано",

photo:"jeanette.png",

status:"Жива",

generation:4,

parents:[],

partner:null,

exPartners:[
"ares"
],

children:[
"renesme"
],

story:
`Жаннет Тоскано — бывший партнёр Ареса и мать Ренесме.

Она стала важной частью истории пятого поколения семьи Фокс.`
},


{
id:"lilith",

name:"Лилит Фокс",

photo:"lilith.png",

status:"Жива",

generation:4,

parents:[],

partner:"ares",

exPartners:[],

children:[
"renesme",
"lolita",
"theodor"
],

story:
`Лилит Фокс стала супругой Ареса и матерью нового поколения.

Её семья стала основой будущего династии Фокс.`
},


{
id:"renesme",

name:"Ренесме Фокс",

photo:"renesme.png",

status:"Жива",

generation:5,

parents:[
"ares",
"jeanette"
],

partner:null,

exPartners:[
"charles"
],

children:[],

story:
`Ренесме Фокс — представительница пятого поколения династии.

Она выросла между наследием семьи Фокс и собственным стремлением создать свою историю. Её путь только начинается.`
},


{
id:"charles",

name:"Чарльз",

photo:"charles.png",

status:"Жив",

generation:5,

parents:[],

partner:null,

exPartners:[
"renesme"
],

children:[],

story:
`Чарльз — бывший партнёр Ренесме.

Их история стала важной частью её личного пути.`
},


{
id:"lolita",

name:"Лолита Фокс",

photo:"lolita.png",

status:"Жива",

generation:5,

parents:[
"ares",
"lilith"
],

partner:null,

exPartners:[],

children:[],

story:
`Лолита Фокс — представительница пятого поколения династии.`
},


{
id:"theodor",

name:"Теодор Фокс",

photo:"theodor.png",

status:"Жив",

generation:5,

parents:[
"ares",
"lilith"
],

partner:null,

exPartners:[],

children:[],

story:
`Теодор Фокс — младший представитель пятого поколения семьи.`
}

];
