<template>
  <div id="app">
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";

export default {
  name: "App",
  components: {
    ToDoList
  }
};
</script>

<style>

body{
    background: linear-gradient(to right, rgb(21, 208, 214), rgb(228, 144, 221)) ;
    width: 100wh;
    
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
