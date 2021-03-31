$(document).ready(function(){
    console.log("hello world")
    $("h1").hide()

    // $("#title").click(function(){
    //     console.log("THE H1 WAS CLICKED")
    //     $("#title").fadeOut()
    // })

    $("#fade_toggle").click(function(){
        $("#title, #toggle_h1").slideToggle()
    })

    $("#toggle").click(function(){
        $("#toggle_h1").toggle()
    })

    $(".subtext").click(function(){
        $(this).hide()
    })

    // GETTERS AND SETTERS
    var contnet = $("#container").html() //GETTER
    console.log(contnet)

    // $("#container").click(function(){
    //     $("#container").html("<h1>Hello World</h1>") //SETTER
    // })

    $("#form_button").click(function(e){
        e.preventDefault()
        var full_name = $("#full_name").val() // VAL IS USED FOR INPUTS
        console.log(full_name)
    })



})