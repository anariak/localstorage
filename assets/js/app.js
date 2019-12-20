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
    if(e.target.className==='borrar-tweet'){
        console.log(e.target.value)
        console.log(e.target.parentElement.remove());
    }
}


function setLocalStorage(tweet){
    let tweets=[];
    tweets = localStorageGetData();
    tweets.push(tweet)
    localStorage.setItem('tweets', tweet.push)
}

function localStorageGetData(){
    let tweets;
    if (localStorage.getItem === null){
        tweets = []
    }
}