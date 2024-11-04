async function ByName() {
    var a = document.getElementById("name").value;
    const response = await fetch(`http://localhost:8080/weather?city=${a}`);
    if (!response.ok) {
        document.getElementById("city").textContent = "Error fetching weather data."; // Update correct element
        document.getElementById("temp").textContent = ''; // Clear temperature if there's an error
        return;
    }else{
        const data = await response.json();
        const city = data.location.name;                // Get the city name
        const temperature = data.current.temp_c;       // Get the temperature
        const iconUrl = data.current.condition.icon;

        await printing(city, temperature, iconUrl);
    }}

async function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            async position=>{
                const lat=position.coords.latitude;
                const lon=position.coords.longitude;
                console.log(lat,lon);
                const response = await fetch(`http://localhost:8080/cord?lat=${lat}&lon=${lon}`);
                const data = await response.json();
                const city = data.location.name;                // Get the city name
                const temperature = data.current.temp_c;       // Get the temperature
                const iconUrl = data.current.condition.icon;

                await printing(city, temperature, iconUrl);

            },
            error=>{
                alert("Unable to retrieve your location");
            }
        );
    }
    else{
        alert("Geolocation is not supported by this browser.");
    }
}
async function printing(city,temperature,iconUrl){
    document.getElementById("city").textContent = `City: ${city}`;           // Use textContent to set the text
    document.getElementById("temp").textContent = `Temperature: ${temperature} °C`; // Use textContent to set the text
    document.getElementById("img").src=iconUrl;
}
