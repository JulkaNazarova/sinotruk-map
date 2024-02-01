//tabs
function toggleDealers(cityElement) {
  let dealersElement = cityElement.nextElementSibling;
  cityElement.classList.toggle('active');
  dealersElement.classList.toggle('active');
}

console.log('it work')
const input=document.querySelector("#input")
const pointsList=document.querySelector("#itemsList")

let part='';


input.addEventListener('input',(event)=>{
   if(event.target.value.length>=3){
    part=event.target.value;
    makeNewItems(part)
   } else {
    updateList(towns)
   }
})


//отрисовывает функция
const updateList=(towns)=>{
  pointsList.innerHTML=''
  towns.forEach(town =>{

    let townHtml=''
    town.points.forEach(elem=>{
      townHtml+=`
       <div class="map__dealer-item" onclick='showFilial(${elem.coords})'>
            <span class="dealer-title">${elem.company}</span>
            <span class="dealer-adress">${elem.adress}</span>
        </div>
      `
    })

    pointsList.innerHTML+=`
        <li class="map__item">
            <div class="map__city" onclick="toggleDealers(this)">${town.city}</div>
            <div class="map__dealers">
                ${townHtml}
            </div>
        </li>
        `
  });
}

//первыая отрисовка
updateList(towns)

// //отрисовывает (старое)
// const updateList=(points)=>{
//     itemsList.innerHTML=''
//     points.forEach( item=>{
//
//       let phonesHtml=''
//         item.phones.forEach(phone=>{
//             phonesHtml+=`${phone}<br>`
//         })
//
//         itemsList.innerHTML+=`
//         <li onclick='showFilial(${item.coords})'>${item.city}
//             <br>${item.adress}
//             <br>${phonesHtml}
//         </li>
//         <hr>
//         `
//     });
// }

//делаем новый массив
const makeNewItems=(string)=>{
    let newItems=[];
    towns.forEach(town=>{
      // if(
      //   town.city.toLowerCase().includes(string.toLowerCase())
      // ) {
      //
      //   //newItems.push(town)
      //
      // }

      let newItemsInner=[];
      town.points.forEach(point=>{
        if(
          point.company.toLowerCase().includes(string.toLowerCase()) ||
          point.adress.toLowerCase().includes(string.toLowerCase())

        ) {
          newItems.push(town)
        }
      })



      // town.points.forEach(point=>{
      //     if(
      //       point.company.toLowerCase().includes(string.toLowerCase()) ||
      //       point.adress.toLowerCase().includes(string.toLowerCase())
      //
      //     ) {
      //       newItems.push(town)
      //     }
      // })

        // if(
        //   town.city.toLowerCase().includes(string.toLowerCase())
        //     //||
        //     //item.adress.toLowerCase().includes(string.toLowerCase())
        // ) {
        //     newItems.push(town)
        // }


    })
  updateList(newItems)

}




