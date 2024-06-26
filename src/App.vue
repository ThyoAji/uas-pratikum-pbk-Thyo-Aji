<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Thyo Aji Dinata
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Weather" />
        <q-route-tab to="/page2" label="Tugas" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { QLayout, QHeader, QToolbar, QToolbarTitle, QAvatar, QTabs, QRouteTab, QPageContainer } from 'quasar';

export default {
  name: 'App',
  components: {
    QLayout,
    QHeader,
    QToolbar,
    QToolbarTitle,
    QAvatar,
    QTabs,
    QRouteTab,
    QPageContainer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-image: url('/src/assets/wall.jpg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-attachment: fixed;
}
</style>
