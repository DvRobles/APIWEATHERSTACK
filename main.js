//selectores

const btn = document.getElementById('btn-City')
const contenedor = document.getElementById('input-City')

//evento
btn.addEventListener('click', function(){
    clima(contenedor.value)
})

//toma mi key de la api y realiza el fetch
function clima(city) {
    const aKey = "e052fa8bbfbd25faa4601dbbfa57c1fd"
    const request = `http://api.weatherstack.com/current?access_key=${aKey}&query=${city}`
    fetch(request)
        .then(response => response.json())
        .then(json => muestraClima(json))
}


function muestraClima(city) {
    console.log(city)
    const resulDiv = document.getElementById('climita')
    resulDiv.innerHTML += `
    <img class="uk-border-circle" src="${city.current.weather_icons[0]}">
            ${city.request.query} 
            ${city.current.temperature} ${city.location.localtime}
            <p>${city.current.weather_descriptions[0]}.</p>
    `
}