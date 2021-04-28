function loopPokemon() {
    var output = '';
    
    for (var i = 1; i < 152; i++) {
        output += "\n<img id='" + i + "' src=";
        imgBaseURL = "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";
        output += imgBaseURL + i + ".png>\n";
    }
    document.getElementById("wrapper").innerHTML = output;
}

loopPokemon();