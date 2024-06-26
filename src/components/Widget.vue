<template>
  <div class="weather-widget">
    <h2>Weather</h2>
    <input v-model="city" placeholder="Enter city" @keyup.enter="getWeather" />
    <button @click="getWeather">Search</button>
    <div v-if="weather">
      <h3>{{ weather.name }}</h3>
      <p>{{ weather.weather[0].description }}</p>
      <p>Temperature: {{ (weather.main.temp - 273.15).toFixed(2) }} °C</p>
      <p>Humidity: {{ weather.main.humidity }}%</p>
    </div>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      weather: null,
      error: ''
    };
  },
  methods: {
    async getWeather() {
      this.error = ''; // Reset error message on new search
      const apiKey = 'de35c4b9ca5f6cb399985cb71ade8b86';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.weather = data;
      } catch (error) {
        this.error = 'Kota tidak valid.';
      }
    },
  },
};
</script>

<style scoped>
.weather-widget {
  max-width: 300px;
  margin: auto;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.weather-widget input {
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.weather-widget button {
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.weather-widget button:hover {
  background-color: #0056b3;
}

.weather-widget h3 {
  margin-top: 10px;
}

.weather-widget p {
  margin: 5px 0;
}

.error-message {
  color: red;
  margin-top: 10px;
}
body {
  background-image: url('/src/assets/wall.jpg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-attachment: fixed;
}
</style>
