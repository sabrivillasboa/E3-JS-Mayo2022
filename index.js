const pizzas=[{
    id: 1,
    nombre:'Fugazzeta',
    ingredientes: ['cebolla', 'muzzarella'],
    precio: 500,
},{
    id: 2,
    nombre:'Calabresa',
    ingredientes: ['longaniza', 'muzzarella'],
    precio: 800,
},{
    id: 3,
    nombre:'Napolitana',
    ingredientes: ['tomate','aceite de oliva','ajo','muzzarella'],
    precio: 700,
},{
    id: 4,
    nombre:'Especial',
    ingredientes: ['jamon','morron','muzzarella'],
    precio: 800,
},{
    id: 5,
    nombre:'Muzzarella',
    ingredientes: ['muzzarella','aceitunas'],
    precio: 600,
},{
    id: 6,
    nombre:'con Huevo duro',
    ingredientes: ['huevo','muzzarella'],
    precio: 700,
},
];

/*El desafío será, al tocar el botón, capturar el valor ingresado en el input.

Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

Si no coincide con ningún id, renderizar un mensaje de error.*/

const titulo2= document.querySelector('h2');
const titulo4= document.querySelector('h4');
const input1= document.querySelector('input');
const btn= document.querySelector('button');



btn.addEventListener('click', (e) =>{
    const inpValue= input1.value;
    console.log(pizzas.find((pizza) => pizza.id === inpValue));
    
    const nombrePrecio = pizzas.forEach(pizza =>{
        titulo2.innerText = pizza.nombre;
        titulo4.innerText = pizza.precio;
        });
    }); 
