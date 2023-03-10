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




