document.addEventListener('DOMContentLoaded', inicio);

function inicio(){
    
        //console.log("Estado de la cache: "+window.applicationCache.status);
    
    

    switch (window.applicationCache.status) {
        case 0: // UNCACHED == 0
        console.log("Estado de la cache: "+window.applicationCache.status);
          break;
        case 1: // IDLE == 1
        console.log("Estado de la cache: "+window.applicationCache.status);
          break;
        case 2: // CHECKING == 2
        console.log("Estado de la cache: "+window.applicationCache.status);
          break;
        case 3: // DOWNLOADING == 3
        console.log("Estado de la cache: "+window.applicationCache.status);
          break;
        case 4:  // UPDATEREADY == 4
        console.log("Estado de la cache: "+window.applicationCache.status);
          break;
        case 5: // OBSOLETE == 5
          console.log("Estado de la cache: "+window.applicationCache.status);
          break;
        default:
          console.log( 'UKNOWN CACHE STATUS');
          break;
      };

}

