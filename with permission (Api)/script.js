const getlocation = () => { 
    // get the location form the user
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            console.log(lat,long);
        });
    } else{
        alert("geolocation is not allowed by this browser");
    }
}