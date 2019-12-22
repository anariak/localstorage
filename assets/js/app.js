// variables
const listTweets = document.getElementById('lista-tweets');

escucha();
function escucha (){
    //cuando se envia el formulario
    document.getElementById('formulario').addEventListener('submit', agregarTweet);
    listTweets.addEventListener('click', borrarTweet);
    //DOM CONTENT LOADER
    document.addEventListener('DOMContentLoaded',LocalstorageCarga);
    
};


function agregarTweet(e){
    e.preventDefault();
    //@ts-ignore
    const tweet = document.getElementById('tweet').value;
    console.log(tweet)
    const li  = document.createElement('li');
    const X = document.createElement('a');
    // crear atributos de lista LI
    X.className = 'borrar-tweet';
    X.innerText = 'X';
    li.innerText = tweet;
    li.appendChild(X);
    listTweets.appendChild(li);
    console.log(listTweets)
    setLocalStorage(tweet)
};

function borrarTweet(e){
    e.preventDefault();
    let tweets;
    if(e.target.className==='borrar-tweet'){
        console.log(e.target.value)
        console.log(e.target.parentElement.remove());
        borrarTweetLocalStorage(e.target.parentElement.innerText)
        alert ('tweet eliminado');
    }
}


function setLocalStorage(tweet){
   let tweets;
   //obtener todos los datos del arreglo ingresado al localstorage ya que evalua que si esta vacio devuelve un arreglo vacio sino ya puede devolver elementos mediante cadenas de caracteres
   tweets = obtenetTweetsLocalStorage();
    //añadir un elemento al localstorage
   tweets.push(tweet);
   //convertir de string a arreglo para localstorage
   localStorage.setItem('tweets', JSON.stringify(tweets));

}

//Siempre comprobar si existe algun dato referente a lo que se trabaja en el local storge
function obtenetTweetsLocalStorage(){
    let tweets;
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}
//cargar datos desde localstorage 
function LocalstorageCarga(){
    let tweets ;
    tweets = obtenetTweetsLocalStorage();
    tweets.foreach(function(tweet)){
    const li  = document.createElement('li');
    const X = document.createElement('a');
    // crear atributos de lista LI
    X.className = 'borrar-tweet';
    X.innerText = 'X';
    li.innerText = tweet;
    li.appendChild(X);
    listTweets.appendChild(li);
    }
}
//eliminar tweet desde Local Storage

function borrarTweetLocalStorage(tweet){
    let tweets;
    let tweetsborrar;
    console.log(tweet)
    tweetsborrar = tweet.substring(0, tweet.length - 1); //borramos la X!

    //substring toma 2 parametros 1° desde donde parte 2° hastadonde queremos que corte
}