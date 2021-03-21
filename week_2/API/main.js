$(document).ready(function(){
    $.get("https://pokeapi.co/api/v2/pokemon", function(allPoke){
        console.log("ALL POKEMON: ",allPoke)
        for(var i = 0; i < 2; i++){
            $.get(allPoke.results[i].url, function(onePoke){
                console.log("ONE POKEMON: ",onePoke)
                var htmlString = ""
                // htmlString += `<img src =${onePoke.sprites.front_default} alt='pokemon_img'/> `
                htmlString += "<img src="
                htmlString += " ' " + onePoke.sprites.front_default + " ' "
                htmlString += " alt='poke' />"
                $("#pokedex").append(htmlString)
            })
        }
    },'json')

    

//     (async () => {
//         for(var i = 1; i < 3; i++){
//             var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + i)
//             var data  = await response.json()
//             $("#id"+i).attr('src', data.sprites.front_default)
//         }
//     })()
})


