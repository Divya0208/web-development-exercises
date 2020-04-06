<template>
  <div class="table-container" v-if="getTasks.length != 0">
      <table class='table-body'>
          <tr class='table-row' v-for="(task,index) in getTasks" :key="task" >
            <td class='task-column'>
              {{ task }}
            </td>
            <td class='remove-button-column'>
              <button class="remove-button" @click.prevent="removeTask(index)">-</button>
            </td>
          </tr>
      </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'List',

  computed: {
    ...mapGetters(["getTasks"])
  },
  methods: {
    ...mapActions([
      'remove_task'
    ]),

    removeTask: function(index){
      this.remove_task(index);
    }

  }
};
</script>

<style>
table{
  justify-content: center;
  text-align: center;
  align-content: center;
}

.table-container{
  background-color: honeydew;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 0.5rem;
  margin: 2rem 5rem;
  padding: 1.3rem 0;
  margin: 0 5rem;
  display: flex;
  justify-content: center;
}

.table-body{
  width: 80%;
  align-content: center;
  text-align: center;
  justify-content: center;
  justify-items: center;
  padding-left: 5rem;

}

.table-row{
  display: flex;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: white;
  font-size: 20px;
  padding: 10px 8px 10px 8px;
  justify-content: center;
  width:100% ;
}

.task-column{
  font-size: 20px;
  width: 85%;
  justify-content: center;
  text-align: left;
  padding-left: 10px;
}

.remove-button-column{
  font-size: 20px;
  width: 15%;
  justify-content: center;
}

.remove-button{
    height: 35px;
    width: 35px;
    font-size: 2rem;
    background-color:rgb(167, 245, 167);
    border-radius: 50%;      
    border:none;           
    line-height : 20px;
    margin-left: 5px;
    text-align: center;
    justify-items: center;    
}
</style>