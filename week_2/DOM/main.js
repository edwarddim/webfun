// 1. Event that I'm listening
// 2. Function that's going to run some code
document.addEventListener("DOMContentLoaded", function(){
    // 1. Grabbing the Button as an object
    var button = document.getElementById("click-me")
    // 2. Adding an eventListener on the button
    var count = 0;
    button.addEventListener("click", function(){
        // 3. Once the button is clicked, do this
        count++
        console.log("THE BUTTON HAS BEEN CLICKED THIS MANY TIMES: ", count)
    })

    var container = document.getElementById("container")
    var hello = document.getElementById("hello")

    var hover = document.getElementById("hover")
    hover.addEventListener("mouseover", function(){
        console.log("I'VE BEEN HOVERED!!")
    })
    hover.addEventListener('click', function(){
        container.style.backgroundColor = "Yellow"
        container.innerHTML = "<h1>THIS IS REPLACING EVERYTHING</h1>"
    })
})

// CALLBACK FUNCTIONS
