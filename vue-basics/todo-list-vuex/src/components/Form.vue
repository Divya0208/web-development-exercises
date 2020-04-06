<template>
  <div class="form-container">
    <form id="task" class="form">
      <input type="text" class="textfield" id="nextTask" v-model="task" placeholder="Enter new task" />
      <button @click.prevent="addTask" class="addButton">+</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      task: "",
      show: true
    };
  },

  methods: {
    ...mapActions(["add_task"]),

    addTask() {
      this.add_task(this.task);
      this.task = "";
    },
  },
};
</script>

<style>
.form-container {
  background-color: honeydew;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 0.5rem;
  height: 6rem;
  margin: 0 5rem;
  align-content: center;
  padding: 1.4rem 0;
}

.form {
  display: flex;
  justify-content: center;
}

.task {
  width: 30rem;
}

.addButton {
  height: 50px;
  width: 50px;
  font-size: 2em;
  background-color: rgb(255, 196, 0);
  border-radius: 1em;
  border: none;
  line-height: 2px;
  margin-left: 5px;
}

.textfield {
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 20px;
  padding: 10px 8px 10px 8px;
  background: white;
  width: 70%;
}
</style>
