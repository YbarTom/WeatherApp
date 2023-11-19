export async function getCoordinates(locationName) {
    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&APPID=c877f85deb2cc15a560ed41c5dcbf9b1&units=metric`);
        if (!response.ok) {
            throw new Error(`Failed to fetch coordinates. Status: ${response.status}`);
        }
        const coordinates = await response.json();
        return coordinates;
    } catch (error) {
        console.error("Error fetching coordinates:", error);
        throw error; // Rethrow the error to be handled elsewhere if needed
    }
}

export async function getWeather(lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c877f85deb2cc15a560ed41c5dcbf9b1&units=metric`);
        if (!response.ok) {
            throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
        }
        const weather = await response.json();
        return weather;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error; // Rethrow the error to be handled elsewhere if needed
    }
}
