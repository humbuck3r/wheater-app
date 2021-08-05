const API_KEY = "bf3dae116e27933eae25e67a5a16e532";
const name = 0
const fetchData = position => {
    const { latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data));
    
    
    
}

const setWeatherData = data =>{
    console.log(data);
    const weatherData = {
        location: 'Ubicación: ' + data.name,
        description: 'Cielo: ' + data.weather[0].main,
        humidity: 'Humedad: '+ data.main.humidity + '%',
        pressure:  'Presión: '+ data.main.pressure + 'Hpa',
        temperature: 'Temperatura: '+ data.main.temp +'°c',
        date: getDate(),    
    }
    Object.keys(weatherData).forEach( key =>{
        document.getElementById(key).textContent = weatherData[key];
    });
}





const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${  ('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData)
}