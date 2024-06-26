<template>
    <div class="tugas">
      <h2>Pilih Tugas</h2>
      <select v-model="selectedTask" @change="navigateToTask">
        <option disabled value="">Pilih Tugas</option>
        <option v-for="(url, name) in tasks" :key="name" :value="url">{{ name }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedTask: '',
        tasks: {
          'Tugas 1': 'https://tugas1-thyo-aji.vercel.app/',
          'Tugas 2': 'https://tugas2-thyo-aji.vercel.app/',
          'Tugas 3': 'https://tugas3-thyo-aji.vercel.app',
          'Tugas 4': 'https://tugas4-thyo-aji.vercel.app',
          'Tugas 5': 'https://tugas5-thyo-aji.vercel.app/',
          'Tugas 6': 'https://tugas6-thyo-aji.vercel.app',
          'Tugas 7': 'https://tugas7-thyo-aji.vercel.app'
        }
      };
    },
    methods: {
      navigateToTask() {
        if (this.selectedTask) {
          window.location.href = this.selectedTask;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .tugas {
    max-width: 300px;
    margin: auto;
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .tugas select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  body {
  background-image: url('/src/assets/wall.jpg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-attachment: fixed;
}
  </style>
  