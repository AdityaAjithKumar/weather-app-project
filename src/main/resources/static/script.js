async function printing() {
    var a = document.getElementById("name").value;

    // Use template literals correctly for the URL
    const response = await fetch(`http://localhost:8080/weather?city=${a}`);

    if (!response.ok) { // Check if the response is successful
        document.getElementById("city").textContent = "Error fetching weather data."; // Update correct element
        document.getElementById("temp").textContent = ''; // Clear temperature if there's an error
        return;
    }

    const data = await response.json();

    // Extract specific properties
    const city = data.location.name;                // Get the city name
    const temperature = data.current.temp_c;       // Get the temperature
    const iconUrl = data.current.condition.icon;
    // Display the results
    document.getElementById("city").textContent = `City: ${city}`;           // Use textContent to set the text
    document.getElementById("temp").textContent = `Temperature: ${temperature} °C`; // Use textContent to set the text
    document.getElementById("img").src=iconUrl;
}
