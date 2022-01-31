// function $(id){
//     return document.getElementById(id)
// }

let $ = (id) => document.getElementById(id)

function $classClick(clName){
    var elements = document.getElementsByClassName(clName);
    for (let index = 0; index < elements.length; index++) {
        console.log(elements[index].attributes["selected"].value)
    }
}