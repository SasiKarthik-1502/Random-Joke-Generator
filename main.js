const jokeText = document.querySelector(".joke");
const jokeBtn = document.querySelector(".joke-btn");

jokeBtn.addEventListener("click",getJoke);
    getJoke();

    
function getJoke(){
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        const joke = data.joke;
        jokeText.innerText = joke;
    });
}
