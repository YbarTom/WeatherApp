<template >
  <v-card class="mx-auto mt-4 mb-4" max-width="368" rounded="xl" style="border: none; padding: 0;" :class="pa - 0">
    <v-container fluid>
      <v-toolbar class="mb-4" style="color: #003cff;" rounded="xl">

        <v-text-field v-model="locationName" hide-details single-line rounded="xl"></v-text-field>

        <v-btn @click="callAPI" color="#0c47ff" icon size="64">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
              <path
                d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
              <path fill="currentColor"
                d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2ZM4 10.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0Z" />
            </g>
          </svg>

        </v-btn>
      </v-toolbar>

      <v-card-title v-if="this.jsonData !== null" class="text-h2 mt-6" cols="6" style="color: #0a1e5c;">
        {{ this.jsonData[0].name }}
      </v-card-title>

      <div class="text-center mx-auto">
        <img :src="image" class="d-block mx-auto">
      </div>

      <v-card-text class="py-0" style="color: #10379f;">
        <v-row align="center" no-gutters>
          <v-col v-if="this.weather !== null" class="text-h3" cols="6">
            {{ this.weather.main.temp }}°
          </v-col>
        </v-row>
      </v-card-text>
    </v-container>
    <div class="d-flex py-3 justify-space-between">
      <v-list-item dense>
        <v-list-item-content>
          <v-row align="center" no-gutters>
            <v-list-item-icon style="color: #003cff;">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd"
                  d="M6.25 5.5A3.25 3.25 0 1 1 9.5 8.75H3a.75.75 0 0 1 0-1.5h6.5A1.75 1.75 0 1 0 7.75 5.5v.357a.75.75 0 1 1-1.5 0V5.5Zm8 2a4.25 4.25 0 1 1 4.25 4.25H2a.75.75 0 0 1 0-1.5h16.5a2.75 2.75 0 1 0-2.75-2.75V8a.75.75 0 0 1-1.5 0v-.5Zm-11 6.5a.75.75 0 0 1 .75-.75h14.5a4.25 4.25 0 1 1-4.25 4.25V17a.75.75 0 0 1 1.5 0v.5a2.75 2.75 0 1 0 2.75-2.75H4a.75.75 0 0 1-.75-.75Z"
                  clip-rule="evenodd" />
              </svg>


            </v-list-item-icon>
            <div class="mx-1"></div>
            <v-list-item-subtitle class="text-h" v-if="this.weather !== null" style="color: #0c47ff;">
              {{ this.weather.wind.speed }}m/s
            </v-list-item-subtitle>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <!-- Agrega un espacio entre las dos v-list-item -->


      <v-list-item dense>
        <v-list-item-content>
          <v-row align="center" no-gutters>

            <v-list-item-icon style="color: #0c47ff;">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M11 20.45q-2.95-.375-4.975-2.6T4 12.6q0-1.65.612-3.062T6.35 7.05L12 1.5l5.65 5.55q.9.9 1.488 2.025t.787 2.425H17.9q-.175-.85-.587-1.612T16.25 8.5L12 4.3L7.75 8.5q-.875.825-1.313 1.863T6 12.6q0 2.175 1.438 3.825t3.562 2v2.025Zm.95-9.1Zm1.35 4.325l-.6-1.375q.65-.35 1.363-.575T15.5 13.5q.575 0 1.137.138t1.088.337q.45.2.913.35t.962.15q.575 0 1.125-.2T21.8 13.8l.6 1.375q-.65.35-1.362.575t-1.438.225q-.575 0-1.137-.137t-1.088-.338q-.45-.2-.913-.35T15.5 15q-.575 0-1.125.2t-1.075.475Zm0 3l-.6-1.375q.65-.35 1.363-.575T15.5 16.5q.575 0 1.137.138t1.088.337q.45.2.913.35t.962.15q.575 0 1.125-.2T21.8 16.8l.6 1.375q-.65.35-1.362.575t-1.438.225q-.575 0-1.137-.138t-1.088-.337q-.45-.2-.913-.35T15.5 18q-.575 0-1.125.2t-1.075.475Zm0 3l-.6-1.375q.65-.35 1.363-.575T15.5 19.5q.575 0 1.137.138t1.088.337q.45.2.913.35t.962.15q.575 0 1.125-.2T21.8 19.8l.6 1.375q-.65.35-1.362.575t-1.438.225q-.575 0-1.137-.138t-1.088-.337q-.45-.2-.913-.35T15.5 21q-.575 0-1.125.2t-1.075.475Z" />
              </svg>
            </v-list-item-icon>
            <div class="mx-1"></div>
            <v-list-item-subtitle class="text-h" v-if="this.weather !== null" style="color:#0c47ff ;">
              {{ this.weather.main.humidity }}%
            </v-list-item-subtitle>
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </div>


  </v-card>
</template>

<style scoped>
.custom-toolbar {
  box-shadow: none;
  /* Elimina cualquier sombra en la v-toolbar */
}
</style>

<script >
import { getCoordinates, getWeather } from './communicationsManager';

export default {
  data: () => ({
    labels: { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' },
    expand: false,
    time: 0,
    forecast: [
      { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
      { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
      { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
    ],
    lat: "",
    lon: "",
    weather: null,
    locationName: "",
    jsonData: null,
    image: ""
  }),
  methods: {
    async getImage(description) {
      switch (description) {
        case 'clear sky':
          return 'https://openweathermap.org/img/wn/01d@4x.png';
        case 'few clouds':
          return 'https://openweathermap.org/img/wn/02d@4x.png';
        case 'scattered clouds':
          return 'https://openweathermap.org/img/wn/03d@4x.png';
        case 'broken clouds':
          return 'https://openweathermap.org/img/wn/04d@4x.png';
        case 'overcast clouds':
          return 'https://openweathermap.org/img/wn/04d@4x.png';
        case 'shower rain':
          return 'https://openweathermap.org/img/wn/09d@4x.png';
        case 'light intensity drizzle':
          return 'https://openweathermap.org/img/wn/09d@4x.png';
        case 'drizzle':
          return 'https://openweathermap.org/img/wn/09d@4x.png';
        case 'heavy intensity drizzle':
          return 'https://openweathermap.org/img/wn/09d@4x.png';
        case 'light intensity drizzle rain':
          return 'https://openweathermap.org/img/wn/09d@4x.png';
        case 'drizzle rain':
          return 'https://openweathermap.org/img/wn/09d@4x.png';
        case 'heavy intensity drizzle rain':
          return 'https://openweathermap.org/img/wn/09d@4x.png';
        case 'shower rain and drizzle':
          return 'https://openweathermap.org/img/wn/09d@4x.png';
        case 'heavy shower rain and drizzle':
          return 'https://openweathermap.org/img/wn/09d@4x.png';
        case 'shower drizzle':
          return 'https://openweathermap.org/img/wn/09d@4x.png';
        case 'light intensity shower rain':
          return 'https://openweathermap.org/img/wn/09d@4x.png';
        case 'shower rain':
          return 'https://openweathermap.org/img/wn/09d@4x.png';
        case 'heavy intensity shower rain':
          return 'https://openweathermap.org/img/wn/09d@4x.png';
        case 'ragged shower rain':
          return 'https://openweathermap.org/img/wn/09d@4x.png';
        case 'rain':
          return 'https://openweathermap.org/img/wn/10d@4x.png';
        case 'light rain':
          return 'https://openweathermap.org/img/wn/10d@4x.png';
        case 'moderate rain':
          return 'https://openweathermap.org/img/wn/10d@4x.png';
        case 'heavy intensity rain':
          return 'https://openweathermap.org/img/wn/10d@4x.png';
        case 'very heavy rain':
          return 'https://openweathermap.org/img/wn/10d@4x.png';
        case 'extreme rain':
          return 'https://openweathermap.org/img/wn/10d@4x.png';
        case 'thunderstorm':
          return 'https://openweathermap.org/img/wn/11d@4x.png';
        case 'thunderstorm with light rain':
          return 'https://openweathermap.org/img/wn/11d@4x.png';
        case 'thunderstorm with rain':
          return 'https://openweathermap.org/img/wn/11d@4x.png';
        case 'thunderstorm with heavy rain':
          return 'https://openweathermap.org/img/wn/11d@4x.png';
        case 'light thunderstorm':
          return 'https://openweathermap.org/img/wn/11d@4x.png';
        case 'heavy thunderstorm':
          return 'https://openweathermap.org/img/wn/11d@4x.png';
        case 'ragged thunderstorm':
          return 'https://openweathermap.org/img/wn/11d@4x.png';
        case 'thunderstorm with light drizzle':
          return 'https://openweathermap.org/img/wn/11d@4x.png';
        case 'thunderstorm with drizzle':
          return 'https://openweathermap.org/img/wn/11d@4x.png';
        case 'thunderstorm with heavy drizzle':
          return 'https://openweathermap.org/img/wn/11d@4x.png';
        case 'snow':
          return 'https://openweathermap.org/img/wn/13d@4x.png';
        case 'freezing rain':
          return 'https://openweathermap.org/img/wn/13d@4x.png';
        case 'light snow':
          return 'https://openweathermap.org/img/wn/13d@4x.png';
        case 'heavy snow':
          return 'https://openweathermap.org/img/wn/13d@4x.png';
        case 'sleet':
          return 'https://openweathermap.org/img/wn/13d@4x.png';
        case 'light shower sleet':
          return 'https://openweathermap.org/img/wn/13d@4x.png';
        case 'shower sleet':
          return 'https://openweathermap.org/img/wn/13d@4x.png';
        case 'light rain and snow':
          return 'https://openweathermap.org/img/wn/13d@4x.png';
        case 'rain and snow':
          return 'https://openweathermap.org/img/wn/13d@4x.png';
        case 'light shower snow':
          return 'https://openweathermap.org/img/wn/13d@4x.png';
        case 'shower snow':
          return 'https://openweathermap.org/img/wn/13d@4x.png';
        case 'heavy shower snow':
          return 'https://openweathermap.org/img/wn/13d@4x.png';
        case 'mist':
          return 'https://openweathermap.org/img/wn/50d@4x.png';
        case 'smoke':
          return 'https://openweathermap.org/img/wn/50d@4x.png';
        case 'haze':
          return 'https://openweathermap.org/img/wn/50d@4x.png';
        case 'sand/dust whirls':
          return 'https://openweathermap.org/img/wn/50d@4x.png';
        case 'fog':
          return 'https://openweathermap.org/img/wn/50d@4x.png';
        case 'sand':
          return 'https://openweathermap.org/img/wn/50d@4x.png';
        case 'dust':
          return 'https://openweathermap.org/img/wn/50d@4x.png';
        case 'volcanic ash':
          return 'https://openweathermap.org/img/wn/50d@4x.png';
        case 'squalls':
          return 'https://openweathermap.org/img/wn/50d@4x.png';
        case 'tornado':
          return 'https://openweathermap.org/img/wn/50d@4x.png';
        default:
          return '';
      }
    },
    async coordinates(locationName) {
      try {
        // Usa await para esperar a que la promesa se resuelva
        this.jsonData = await getCoordinates(locationName);

        // Verifica si jsonData no es undefined o null antes de acceder a las propiedades
        if (this.jsonData && this.jsonData[0] && this.jsonData[0].local_names) {
          // Extrae la latitud y longitud del objeto
          this.lat = this.jsonData[0].lat;
          this.lon = this.jsonData[0].lon;

          // Llama a la función weatherAPI con las coordenadas obtenidas
          this.weatherAPI(this.lat, this.lon);
        } else {
          console.error("Formato de respuesta no válido:", this.jsonData);
        }
      } catch (error) {
        console.error("Error al obtener coordenadas:", error);
        // Maneja el error según sea necesario
      }
    },

    async weatherAPI(lat, lon) {
      try {
        // Usa await para esperar a que la promesa se resuelva
        this.weather = await getWeather(lat, lon);
        console.log(this.weather)
        this.image = await this.getImage(this.weather.weather[0].description);

      } catch (error) {
        console.error("Error al obtener datos meteorológicos:", error);
        // Maneja el error según sea necesario
      }
    },

    callAPI() {
      this.coordinates(this.locationName);

      // No es necesario llamar a weatherAPI aquí, ya que se llama desde coordinates después de obtener las coordenadas
    },
  },
};
</script>


