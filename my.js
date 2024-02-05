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

//первая отрисовка
updateList(towns)


//делаем новый массив после поиска
const makeNewItems=(string)=>{
    //сначала перебираем города
    let newItems=[];
    towns.forEach(town=>{
      if(
        town.city.toLowerCase().includes(string.toLowerCase())
      ) {
        newItems.push(town)
      }
      else {
        //если среди городов не нашли, то перебираем названия и адреса компаний
        town.points.forEach(point=> {
          let newItems2 = [];
          if (
            point.company.toLowerCase().includes(string.toLowerCase()) ||
            point.adress.toLowerCase().includes(string.toLowerCase())
          ) {
            newItems2.push({
              city: town.city,
              points: []
            })
            newItems2.forEach(newPoint=> {
              if (newPoint.city == town.city) {
                newPoint.points.push({
                  company: point.company,
                  adress: point.adress,
                  phone: point.phone,
                  coords: point.coords
                })
              }
            })
          }
          console.log(newItems2);
          //объединяем два массива
          newItems = newItems.concat(newItems2);

        })

      }


      // let newItems2=[];
      // town.points.forEach(point=>{
      //   if(
      //     point.company.toLowerCase().includes(string.toLowerCase()) ||
      //     point.adress.toLowerCase().includes(string.toLowerCase())
      //   ) {
      //
      //     towns.forEach(newItem=>{
      //       if(newItem.city!=point.city){
      //
      //         //массив для новой точки
      //         let newPoint2=[],
      //         newPoint2.push({
      //           company: point.company,
      //           adress:point.adress,
      //           phone: point.phone,
      //           //coords: point.coords
      //         })
      //        console.log(newPoint2)
      //
      //         // newItems2.push({
      //         //   city: town.city,
      //         //   points: []
      //         // })
      //
      //       }
      //     })
      //
      //
      //   }
      //   // console.log(newItems2)
      //   // newItems = newItems.concat(newItems2);
      //
      // })



    })
  updateList(newItems)
  //updateList(newItemsInner)

}




