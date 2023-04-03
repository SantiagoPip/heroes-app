import { Heroes } from "../data/Heroes"

export const getHeroByNames = (name)=>{
    if(name.length ===0){
        return []
    }
    name = name.toLocaleLowerCase().trim()
    return Heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name))
}