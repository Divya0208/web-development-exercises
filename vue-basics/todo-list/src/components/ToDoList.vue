<template>
  <div class="container">
    <div class="form-container" v-if="show">
      <b-form >
        <b-form-group label-for="input-1">
          <b-form-input
            v-model="newTask"
            type="text"
            required
            placeholder="Enter a task"
          ></b-form-input>
        </b-form-group>
        <button @click.prevent="onSubmit" class="add-button">+</button>
      </b-form>
    </div>

    <div class="list-container" v-if="this.tasks.length != 0">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Done?</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task,index) in this.tasks" :key="task">
            <th scope="row">{{index}}</th>
            <td>{{task}}</td>
            <td><button class="remove-button" @click.prevent="remove(index)">-</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: "",
      show: true,
    };
  },
  methods: {
    onSubmit() {
      if (this.newTask.length !== 0) {
        this.tasks.push(this.newTask);
      }
      this.onReset();
    },
    onReset() {
      // Reset our form values
      this.newTask = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    remove(index){
      this.tasks.splice(index, 1);
    }
  },
};
</script>

<style>

.add-button {
  height: 50px;
  width: 50px;
  font-size: 2em;
  background-color: rgb(255, 196, 0);
  border-radius: 1em;
  border: none;
  line-height: 2px;
  margin-left: 5px;
}

.remove-button{
    height: 25px;
    width: 25px;
    font-size: 2rem;
    background-color:rgb(167, 245, 167);
    border-radius: 50%;      
    border:none;           
    line-height : 17px;
    text-align: center;
    justify-items: center; 
    padding-bottom: 1.5rem;   
}

.list-container{
  margin-top: 1rem;
}

</style>
