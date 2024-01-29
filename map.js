var myMap;

ymaps.ready(init);

function  init() {
     myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 5,
            type: 'yandex#map'
        }, {
            searchControlProvider: 'yandex#search'
        })

    items.forEach(item => 
        {   
            //верстка для балуна
            let balloonContent=''
            balloonContent+=`<b>${item.city}</b><hr>`

            let phones=''
            item.phones.forEach(phone=>{
                phones+=`<a href='tel:${phone}'>${phone}</a><br>`
            })
            balloonContent+=phones
            
        //добавляем точку    
        myMap.geoObjects
        .add(new ymaps.Placemark(item.coords, {
            balloonContent: balloonContent
        }, {
            preset: 'islands#redSportIcon'
        })
        )
        
    });
}

function showFilial(x,y) {
    /*
    myMap.setZoom(5, {duration: 1000});
    myMap.setCenter([x,y])
    myMap.setZoom(16, {duration: 1000});
    */
    
    
    myMap.setZoom(5, {duration: 2000});
    //////
    
    myAction = new ymaps.map.action.Single({
        center: [x, y],
        zoom: 15,
        duration: 3000,
        timingFunction: "ease-in"
  });
  setTimeout(()=>{
    myMap.action.execute(myAction)
  },2000)


    /////
    
    console.log(x,y)
    
    
}
