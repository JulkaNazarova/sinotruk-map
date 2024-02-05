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
    
    //заполнили городами
    towns.forEach(town=>{
      //если города есть кладем все
      if(
        town.city.toLowerCase().includes(string.toLowerCase())
      ) {
        newItems.push(town)
      
      } else {
        //если города нет
        let objToAdd={city:town.city,points:[]}
        //смотрим есть ли точки которые есть в городе которого нет
        town.points.forEach(point=>{
          if (
            point.company.toLowerCase().includes(string.toLowerCase()) ||
            point.adress.toLowerCase().includes(string.toLowerCase())
          ) {
            objToAdd.points.push(point)
          }
        })
        //если точки есть то добавляем в массив
        if(objToAdd.points.length>0) {
          newItems.push(objToAdd)
        }
      }
    })

  updateList(newItems)


}




