// import { useMemo} from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// export default function Home(){

//     const {isLoaded} = useLoadScript({

//         googleMapsApiKey: "AIzaSyCGLaDL46KgWIre9tVEGgX1MJtPOuu8bTQ",

//     });

//     // getting a " unexpected token '<' " on the line below 
//     if(!isLoaded) return <div>Loading...</div>;
//     return <div>Map</div>;
// }


function initMap() {
    let iowaState = { lat:  42.02846678849032, lng: -93.6508728711652 }; 
    // creates a new google maps object
    let map = new google.maps.Map(
        // was initially getELementById, if cannot get to work later, change map from a class to an id
        document.getElementById('map'), { zoom: 17, center: iowaState } // zoom == zoom level, zoom 0 is the lowest. center == 
    )
    let marker = new google.maps.Marker({ position: iowaState, map: map })

}
{/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGLaDL46KgWIre9tVEGgX1MJtPOuu8bTQ&callback=initMap"> </script> */}




// import { useMemo} from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// export default function Home(){

//     const {isLoaded} = useLoadScript({

//         googleMapsApiKey: "AIzaSyCGLaDL46KgWIre9tVEGgX1MJtPOuu8bTQ",

//     });

//     // getting a " unexpected token '<' " on the line below 
//     if(!isLoaded) return <div>Loading...</div>;
//     return <div>Map</div>;
// }


function initMap() {
    let iowaState = { lat:  42.02846678849032, lng: -93.6508728711652 }; 
    // creates a new google maps object
    let map = new google.maps.Map(
        // was initially getELementById, if cannot get to work later, change map from a class to an id
        document.getElementById('map'), { zoom: 17, center: iowaState } // zoom == zoom level, zoom 0 is the lowest. center == 
    )
    let marker = new google.maps.Marker({ position: iowaState, map: map })

}
/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGLaDL46KgWIre9tVEGgX1MJtPOuu8bTQ&callback=initMap"> </script> */

// use a combo of activity9 and movies activity
// make a function called loadPictures

fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    // if(document.getElementById("data") != null){
    //     var idPost=document.getElementById("data").innerHTML;
    // }
    .catch(function (err) {
        console.log('error:' + err);
    });

// use this in the html
//<script src="./index.js">  //links the js to the html. the js is where you'll write most of the code </script>

function appendData(data) {
    let mainContainer = document.getElementById('myData'); // is it because of this line? I think it's because this line returns null
    //let testInt = 1;

    data.forEach((result) => {
        
        const card = document.createElement('div');
        card.classList = "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3";
        const content = 
        `
            <div class="col">
            
            
              <div class="card shadow-sm">
              
                <img
                  src="${result.url}"
                  alt="${result.description}"
                />
                
                <div class="card-body">
                
                  <h4>${result.description}</h4>
                  
                  <p class="card-text">
                    ${result.description}
                  </p>
                  
                  <p class="card-text">
                    ${result.price}
                  </p>
                  
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                  
                  
                    <div class="btn-group">
                    
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        onclick=""
                      >
                      
                        View
                      </button>
                      
                    </div>
                    
                    <small class="text-muted"></small>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
        `;
        mainContainer.innerHTML += content;
    })
}
