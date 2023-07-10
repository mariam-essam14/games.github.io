import { displaydetailes } from "./ui.module.js";

 

export function getGame(){
    let games =document.querySelectorAll(".detail")
    for(let i=0; i<games.length; i++){
        games[i].addEventListener("click",function(){
             
                  let xd=this.getAttribute("detailGame")
                document.querySelector(".Games").classList.add("d-none");
                document.querySelector(".details").classList.remove("d-none");
        
            getDetails( xd)

       
        })  
    }
}


export let detailData=[]
export async function getDetails(m){
 const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6902c2dcd3mshc20e7433015f861p191c9bjsn61070e649f14',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    let res = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id='+m+'', options)
   let data =await res.json()
   
   
  detailData=data

   
 displaydetailes()
   
}
