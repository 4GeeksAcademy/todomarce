import React, { useEffect, useState } from "react";

const Todolist = () => {
    const [tareas , setTareas] = useState([]);

// Función que nos crea el usuario marce (POST)
async function crearUsuarioMarce() {
    const response = await fetch ("https://playground.4geeks.com/todo/users/marce" , {method: "POST"});

    if(!response.ok) {
        (console.log("Hubo un error" , response.status , response.statusText));
    };

};



// Función que nos trae las tareas del usuario (GET)
    async function traerTareas() {
        const response = await fetch ("https://playground.4geeks.com/todo/users/marce" , {method: "GET"});

        if(!response.ok) {
            (console.log("Hubo un error" , response.status , response.statusText));
        };

        const data = await response.json();
        setTareas(data.todos);
    };

// Función que nos borra las tareas del usuario (DELETE)
async function borrarTarea(item) {
    const response = await fetch (`https://playground.4geeks.com/todo/todos/${item.id}` , {method: "DELETE"});

    if(!response.ok) {
        (console.log("Hubo un error" , response.status , response.statusText));
    };

    traerTareas();

};



useEffect (()=>{
    crearUsuarioMarce();
    traerTareas();
} , [])


    return (
        <>
            <h1>Lista de tareas</h1>
            <input type="text" />
            <button>Crear tarea</button>

            {tareas.map((item)=>
            <>
                <h4>{item.label}</h4>
                <button onClick={()=> borrarTarea(item)}>borrar</button>
            </>
            )}
        </>
    );
};

export default Todolist;