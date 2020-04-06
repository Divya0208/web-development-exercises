import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks : []
  },

  mutations: {
    add_task: (state, newTask) => {
      state.tasks.push(newTask);
    },
    remove_task: (state, index) => {
      state.tasks.splice(index, 1);
    }
  },

  actions: {
    add_task: ({ commit }, newTask) => {
      commit('add_task', newTask);
    },
    remove_task: ({commit}, index) => {
      commit('remove_task', index)
    }
  },

  getters: {
    getTasks: (state) => {
      return state.tasks;
    }
  }
});
