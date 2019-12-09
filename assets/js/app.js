// variables
const listTweets = document.getElementById('lista-tweets');

//event listeners

escucha();
function escucha (){
    //cuando se envia el formulario
    document.getElementById('formulario').addEventListener('submit', agregarTweet);

};

//funciones

//añadir tweet al formulario

function agregarTweet(e){
    e.preventDefault();
    //leer el valor de textarea
    const tweet = document.getElementById("tweet").value;
    //crear list
    const li = document.createElement('li');
    //boton borrar
    const borrar = document.createElement('a');
    borrar.classList = 'borrar-tweet';
    borrar.innerText = 'X'
    li.innerText = tweet;
    li.appendChild(borrar);
    listTweets.appendChild(li);
    console.log(tweet);
}

function borrarTweet(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        console.log(e.target.parentElement.remove());
        alert('tweet Eliminado');
    }
}
//

