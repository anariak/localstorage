// variables
const listTweets = document.getElementById('lista-tweets');

const tweet = document.querySelector('#tweet')
//event listeners

escucha();
function escucha (){
    //cuando se envia el formulario
    document.getElementById('formulario').addEventListener('submit', agregarTweet);

    listTweets.addEventListener('click', borrarTweet)

};

//funciones

//añadir tweet al formulario

function agregarTweet(e){
    e.preventDefault();
    //leer el valor de textarea
    // @ts-ignore
    const tweet = document.getElementById("tweet").value;
    //crear lista de tweets
    const li = document.createElement('li');
        //boton borrar
        const borrar = document.createElement('a');
        borrar.className = 'borrar-tweet';
        borrar.innerText = 'X'
        //texto al Elemento LI
        li.innerText = tweet;
        li.appendChild(borrar);
        listTweets.appendChild(li);
        //funcion que añade al local storage ()=>
        agregarTweetLocalStorage(tweet);
}
//elminar tweet Del Dom 
function borrarTweet(e){
    e.preventDefault();
    e.target.parentElement.remove();
    removeLocal(tweet)
}

function removeLocal(tweet){
    tweet.preventDefault();
    localStorage.removeItem('tweets');
};
//Agregar Tweee a localStorage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetLocalStorage();
    tweets.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

//remover data desde LocalStorage
function obtenerTweetLocalStorage(tweet){
    let tweets;
    //Revision los valores en local storge
    if(localStorage.getItem('tweet')===null){
        tweets=[]
        return alert(' no existen tweets ') //al no encontrar elementos lo devuelve como arreglo vacio 
    }else{
        tweets=JSON.parse(localStorage.getItem('tweet'));
    }
    return tweets;
}

