let api_key = '6fde6c69c73b9e50373a93e866dbfbd9'
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let difKelvin = 273.15


    document.getElementById('botonBusqueda').addEventListener('click', () => {
        const ciudad = document.getElementById('ciudadEntrada').value
        if(ciudad){
            fetchDatosClima(ciudad)
        }
    })

    function fetchDatosClima(ciudad){
        fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(response => response.json())
        .then(response => mostrarDatosClima(response)) 
    }

    function mostrarDatosClima(response){
        //console.log(response)
        const divDatosClima = document.getElementById('datosClima')
        divDatosClima.innerHTML=''

        const ciudadNombre = response.name
        const temperaturaCiudad = response.main.temp
        const sensacionTermicaCiudad = response.main.feels_like
        const pais = response.sys.country
        const descripcionCiudad = response.weather[0].description
        const icono = response.weather[0].icon


        const tituloCiudad = document.createElement('h2')
        tituloCiudad.textContent = `${ciudadNombre}, ${pais}`

        const temperatura = document.createElement('p')
        temperatura.textContent =  `La temperatura es: ${Math.floor(temperaturaCiudad-difKelvin)} ˚C`

        const iconoCiudad = document.createElement('img')
        iconoCiudad.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

        const descripcion = document.createElement('p')
        descripcion.textContent = `La descripción meteorológica es: ${descripcionCiudad}`

        const sensacionTermica = document.createElement('p')
        sensacionTermica.textContent = `con una sensación térmica de: ${Math.floor(sensacionTermicaCiudad-difKelvin)} ˚C`

         divDatosClima.appendChild(tituloCiudad)
         divDatosClima.appendChild(temperatura)
         divDatosClima.appendChild(iconoCiudad)
         divDatosClima.appendChild(descripcion)
         divDatosClima.appendChild(sensacionTermica)
    }