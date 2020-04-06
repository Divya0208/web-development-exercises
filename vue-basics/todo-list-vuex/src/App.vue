<template>
  <div id="app">
    <Form />
    <List />
  </div>
</template>

<script>
import Form from './components/Form.vue'
import List from './components/List.vue'
export default {
  name: "App",
  components: {
    Form,
    List
  }
};
</script>

<style lang="scss">
body{
    background: linear-gradient(to right, rgb(21, 208, 214), whitesmoke) ;
    
    width: 100wh;
    height: 100vh;
    text-align: center;
    justify-items: center;
    align-items: center;
    
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(to right, rgb(21, 208, 214), whitesmoke);
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
