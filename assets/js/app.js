// variables
const listTweets = document.getElementById('lista-tweets');

escucha();
function escucha (){
    //cuando se envia el formulario
    document.getElementById('formulario').addEventListener('submit', agregarTweet);
    listTweets.addEventListener('click', borrarTweet)
};


function agregarTweet(e){
    e.preventDefault();
    //@ts-ignore
    const tweet = document.getElementById('tweet').value;
    console.log(tweet)
    const li  = document.createElement('li');
    const X = document.createElement('a');
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
        localStorage.removeItem(tweets);
    }
}


function setLocalStorage(tweet){
    let tweets;
    localStorage.setItem('tweets', tweet);
}

//Siempre comprobar si existe algun dato referente a lo que se trabaja en el local storge
function obtenetTweetsLocalStorage(){
    let tweets;
    if(localStorage.getItem('tweets')===null){
        tweets = [];
    }else{
        tweets =JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}