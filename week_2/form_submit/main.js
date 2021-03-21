$(document).ready(function(){
    $("#user_form").submit(function(event){
        // event.preventDefault()

        var first_name = $("#first_name").val()
        var last_name = $("#last_name").val()
        var city = $("#city").val()
        var dob = $("#dob").val()

        var urlString = "https://yourapiurl"
        urlString += city
        $.get(urlString, function(res){
            
        })
    })
})