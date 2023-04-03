import { Heroes } from "../data/Heroes";

export const getHeroesByPublisher = (publisher)=>{
    const validPublisher = ['DC Comics','Marvel Comics']
    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);

    }
    return Heroes.filter(heroe => heroe.publisher === publisher)
}