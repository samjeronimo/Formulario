//LLamando a un node del DOM
let root = document.querySelector("#root");

//Elemento de tipo div con un atriuto class
let div_formulario = document.createElement("div");
div_formulario.className = "div-formulario";

//Lista de datos (String)
let formularios = [
    {nombre: "Login", link: "https://classroom.google.com/h"},
    {nombre: "Login", link: "https://classroom.google.com/h"},
    {nombre: "Login", link: "https://classroom.google.com/h"},
    {nombre: "Login", link: "https://classroom.google.com/h"},
    {nombre: "Login", link: "https://classroom.google.com/h"}
];

//forEach (for)
formularios.forEach(lista =>{ 
    let div_item = document.createElement("a");
    div_item.href = lista.link;
    div_item.className = "div-item";
    div_item.innerText = lista.nombre;

    div_formulario.appendChild(div_item);
 });

 root.appendChild(div_formulario);