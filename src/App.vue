<template>
  <div id="app">
    <h1>
      A kickass TODO app
    </h1>
    <router-view></router-view>
    <hello2/>
  </div>
</template>

<script>
import Hello2 from './components/Hello2';

export default {
  name: 'app',
  components: {
    Hello2,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
