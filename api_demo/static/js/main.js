$(document).ready(function(){


    $("#ditto").click(function(){
        $.get("https://pokeapi.co/api/v2/pokemon/ditto", function(res){
            console.log("THE RESPONSE: ", res)

            // console.log(res.abilities[0].ability.name)
            // console.log(res.abilities[1].ability.name)
            for(var ability of res.abilities){
                $("#ability_list").append("<li>"+ ability.ability.name + "</li>" )
            }
            // console.log(res.sprites.front_default)
            // console.log(res.sprites.back_default)

            var front_defaut = `<img src="${res.sprites.front_default}" alt="poke_img"> `
            var back_default = `<img src="${res.sprites.back_default}" alt="poke_img"> `
            $("#ability_list").before(front_defaut)
            $("#ability_list").before(back_default)

        }, "json")
    })

})