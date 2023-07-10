import {displaygames} from "./ui.module.js";
 

export function getType(){
    let navLinks=document.querySelectorAll(".nav-link")

for(let i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener("click",function(e){
        let type= this.innerHTML
        getDataGames(type)
    })
}
 }

export let gameList=[]
 
export async function getDataGames(type) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6902c2dcd3mshc20e7433015f861p191c9bjsn61070e649f14',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`, options)
    let response =await api.json()
    gameList= response
    displaygames()
}
 
  
