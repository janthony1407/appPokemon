
document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})


const fetchData = async () => {
    try {
        console.log()
        
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon`)
        const data = await res.json()
        
        console.log(data)

        /*const pokemon = {
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            imgJuego: data.sprites.front_default,
            imgCvg: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            experiencia: data.base_experience,
            hp: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial: data.stats[3].base_stat,
        }

        console.log(pokemon);*/
    
    } catch (error) {
        console.log(error)
    }
} 