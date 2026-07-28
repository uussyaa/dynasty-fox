const characters = [

{
id: "elizabeth",
name: "Элизабет Фокс",
photo: "eli.png",
status: "Умерла от старости",

parents: [],

partners: [
{
name: "Томас Фокс",
type: "partner"
}
],

exPartners: [
{
name: "Алекс Фокс",
type: "ex husband"
}
],

children:[
"andrew fox"
],

story:
`Элизабет Фокс — та, с которой начался род.

Однажды преданная мужем ради собственной сестры, она не стала мстить и не сломалась. Она просто ушла туда, где садится солнце, и родила сына в одиночестве.

Жизнь испытала её ещё раз, оставив на пороге чужого ребёнка — дочь предавших её людей. Несмотря на боль, Элизабет приняла её, потому что умела прощать не словами, а поступками.

Так родилась династия Фокс — семья, где любовь всегда идёт рядом с болью, а верность требует жертв.`
},


{
id:"andrew",

name:"Эндрю Фокс",

photo:"andrw.png",

status:"Умер от старости",

parents:[
"elizabeth"
],

partners:[
{
name:"Шейла Фокс",
type:"partner"
}
],

exPartners:[
{
name:"Габриелла Фокс",
type:"ex wife"
}
],

children:[
"serena"
],

story:
`Эндрю Фокс продолжил род, начатый его матерью Элизабет.

Он вырос с наследием сильной женщины, которая научила его стойкости. Его жизнь была наполнена сложными выборами, любовью и потерями.

Именно через него линия Фокс продолжилась дальше.`
},


{
id:"serena",

name:"Серена Фокс",

photo:"Ser.png",

status:"Умерла от болезни",

parents:[
"andrew"
],

partners:[
{
name:"Феликс Сенека",
type:"partner"
}
],

exPartners:[],

children:[
"ares",
"raquel"
],

story:
`Серена Фокс стала следующим звеном династии.

Её жизнь была короткой, но оставила глубокий след. Она подарила миру двух детей — Ракель и Ареса, передав им силу семьи Фокс.`
},


{
id:"ares",

name:"Арес Фокс",

photo:"ars.png",

status:"Жив",

parents:[
"serena"
],

partners:[
{
name:"Лилит Фокс",
type:"partner"
}
],

exPartners:[
{
name:"Жаннет Тоскано",
type:"ex"
}
],

children:[
"renesme",
"lolita",
"theodor"
],

story:
`Арес Фокс стал главой нового поколения.

Его путь был наполнен сложными отношениями, ошибками и взрослением. От союза с Жаннет появилась Ренесме, а позже рядом с Лилит он построил новую семью.

Он продолжает историю Фокс, где прошлое всегда остаётся частью настоящего.`
},


{
id:"renesme",

name:"Ренесме Фокс",

photo:"renesme.png",

status:"Жива",

parents:[
"ares",
"jeanette"
],

partners:[],

exPartners:[
{
name:"Чарльз",
type:"ex"
}
],

children:[],

story:
`Ренесме Фокс — представительница пятого поколения династии.

Она выросла между двумя мирами: наследием семьи Фокс и собственным стремлением создать свою историю.

Её путь только начинается.`
}

];


{
id:"thomas",
name:"Томас Фокс",
photo:"thomas.png",
status:"Жив",
parents:[],
partners:["elizabeth"],
exPartners:[],
children:["andrew"],
story:"Томас Фокс — человек, рядом с которым началась новая глава жизни Элизабет. Его появление стало частью истории, из которой вырос род Фокс."
},


{
id:"alex",
name:"Алекс Фокс",
photo:"alex.png",
status:"Жив",
parents:[],
partners:[],
exPartners:["elizabeth"],
children:["andrew"],
story:"Алекс Фокс — бывший супруг Элизабет и отец наследника второго поколения Эндрю."
},


{
id:"gabriella",
name:"Габриелла Фокс",
photo:"gabriella.png",
status:"Жива",
parents:[],
partners:[],
exPartners:["andrew"],
children:["serena"],
story:"Габриелла Фокс — мать Серены, чья история стала частью сложного прошлого семьи."
},


{
id:"sheila",
name:"Шейла Фокс",
photo:"sheila.png",
status:"Жива",
parents:[],
partners:["andrew"],
exPartners:[],
children:[],
story:"Шейла Фокс стала супругой Эндрю и частью истории второго поколения династии."
},


{
id:"felix",
name:"Феликс Сенека",
photo:"felix.png",
status:"Умер",
parents:[],
partners:["serena"],
exPartners:[],
children:["raquel","ares"],
story:"Феликс Сенека — супруг Серены Фокс и отец следующего поколения семьи."
},


{
id:"jeanette",
name:"Жаннет Тоскано",
photo:"jeanette.png",
status:"Жива",
parents:[],
partners:[],
exPartners:["ares"],
children:["renesme"],
story:"Жаннет Тоскано — мать Ренесме и важная часть истории пятого поколения."
},


{
id:"lilith",
name:"Лилит Фокс",
photo:"lilith.png",
status:"Жива",
parents:[],
partners:["ares"],
exPartners:[],
children:["renesme","lolita","theodor"],
story:"Лилит Фокс стала супругой Ареса и матерью нового поколения семьи."
},


{
id:"raquel",
name:"Ракель Фокс-Сенека",
photo:"raquel.png",
status:"Жива",
parents:["serena","felix"],
partners:["margo"],
exPartners:[],
children:[],
story:"Ракель Фокс-Сенека — дочь Серены и Феликса, представительница четвёртого поколения."
},


{
id:"margo",
name:"Марго Дюбуа",
photo:"margo.png",
status:"Жива",
parents:[],
partners:["raquel"],
exPartners:[],
children:[],
story:"Марго Дюбуа — супруга Ракель и часть семьи Фокс-Сенека."
},


{
id:"lolita",
name:"Лолита Фокс",
photo:"lolita.png",
status:"Жива",
parents:["ares","lilith"],
partners:[],
exPartners:[],
children:[],
story:"Лолита Фокс — представительница пятого поколения династии."
},


{
id:"theodor",
name:"Теодор Фокс",
photo:"theodor.png",
status:"Жив",
parents:["ares","lilith"],
partners:[],
exPartners:[],
children:[],
story:"Теодор Фокс — младший представитель пятого поколения семьи."
}
