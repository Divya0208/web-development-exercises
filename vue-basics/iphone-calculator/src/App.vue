<template>
  <calculator />
</template>

<style>
body {
    background-color: blanchedalmond;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100wh;
    height: 100vh;
}
</style>

<script>
import Calculator from './components/Calculator.vue';
export default {
  name: 'App',
  components: {
    Calculator
  }
};
</script>
