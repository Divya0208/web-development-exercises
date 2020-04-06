/* eslint-disable no-unused-vars */
<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend!</h1>
    <p>Total no. of Pets with us : {{ animalsCount }}</p>
    <p>Total no. of Cats with us : {{ getAllCats }}</p>
    <p>Total no. of Dogs with us : {{ getAllDogs }}</p>

    <button class='btn btn-primary' @click="togglePetForm"> Add New Pet </button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group label="Pet's Name:">
        <b-form-input
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Species:">
        <b-form-select
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
          placeholder="Species:"
        ></b-form-select>
      </b-form-group>

      <b-form-group label="Pet's Age:">
        <b-form-input
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),

    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },

    handleSubmit () {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)

      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats',
      'getAllDogs'
    ])
  }
}

</script>
