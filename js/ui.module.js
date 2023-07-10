import { detailData, getGame } from "./details.modules.js"
import { gameList } from "./game.module.js"

 
 
export function  displaygames(){
    let temp=""
    gameList.forEach((el)=>{
       temp+=` <div detailGame=${el.id}  class="col-lg-3 col-md-6 col-sm-12 game detail">
       <div class="card bg-transparent p-2 mt-2 me-1 ms-1 h-100 " style="width: 18rem;" id="game">
           <img src="${el.thumbnail}" class="card-img-top  " alt="...">
           <div class="card-body ">
               <div class="card-top d-flex justify-content-between align-items-center mb-3">
                   <h3 class="card-title small h6">${el.title}</h3>
                   <span class="badge box   text-white rounded-3 p-2">Free </span>
               </div>
             <p class="card-text small text-center opacity-50  ">${el.short_description}</p>
           </div>
           <div class="card-footer bg-transparent small d-flex justify-content-between align-items-center p-1">
               <span class="badge badge-color p-1 text-white rounded-3">${el.genre} </span>
               <span class="badge  badge-color p-1 text-white rounded-3">${el.platform} </span>
           </div>
         </div>
    </div>`
   
    })
    document.getElementById("myGame").innerHTML=temp
    getGame()
}


export function  displaydetailes(){
    let temp =""
        temp +=` 
        <div class="col-md-4 ">
            <img src="${detailData.thumbnail}" class="w-100 mt-2">
        </div>
        <div class="col-md-8">
         <h3>Title: ${detailData.title}</h3>
         <p>Category: <span class="badge text-bg-info ms-1">${detailData.genre}</span></p>
         <p>Platform: <span class="badge text-bg-info ms-1">${detailData.platform}</span></p>
         <p>Status: <span class="badge text-bg-info ms-1">${detailData.status}</span></p>
         <p class="small">${detailData.description}</p>
         <a class="btn btn-outline-warning text-white"  target="_blank"  href="${detailData.game_url}">Show Game</a>
        </div>
    `
    

    document.getElementById("details").innerHTML=temp

}

 







