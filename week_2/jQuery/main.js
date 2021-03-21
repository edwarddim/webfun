$(document).ready(function(){
    $("#button").click(function(){
        console.log( $("#title").text())
        // SETTER
        $("#title").text("This is the new title from jQuery")
        // GETTER
        var text = $("#title").text()
        console.log(text)
    })

    $("#dark").click(function(){
        $("#container").addClass("dark-mode")
    })

    $("#hide").click(function(){
        $("#title2").toggle()
    })
})

// GETTERS AND SETTERS